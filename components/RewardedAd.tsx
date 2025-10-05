import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';
import { useAdsStore } from '@/stores/ads-store';

// Production Ad Unit ID
const AD_UNIT_ID = Platform.select({
  ios: 'ca-app-pub-5514039766512542/7014641778',
  android: 'ca-app-pub-5514039766512542/7014641778',
  default: TestIds.REWARDED,
}) || TestIds.REWARDED;

// Use test ads in development
const adUnitId = __DEV__ ? TestIds.REWARDED : AD_UNIT_ID;

let rewardedAd: RewardedAd | null = null;

export const initializeRewardedAd = () => {
  if (rewardedAd) {
    return rewardedAd;
  }

  rewardedAd = RewardedAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: false,
  });

  return rewardedAd;
};

export const useRewardedAd = () => {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const incrementAdCount = useAdsStore((state) => state.incrementAdCount);

  useEffect(() => {
    const ad = initializeRewardedAd();

    const unsubscribeLoaded = ad.addAdEventListener(RewardedAdEventType.LOADED, () => {
      setLoaded(true);
      setLoading(false);
    });

    const unsubscribeEarned = ad.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      (reward) => {
        console.log('User earned reward:', reward);
        incrementAdCount(adUnitId);
      }
    );

    // Load the ad
    const loadAd = () => {
      if (!loaded && !loading) {
        setLoading(true);
        ad.load();
      }
    };

    loadAd();

    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, [incrementAdCount]);

  const showAd = async () => {
    if (rewardedAd && loaded) {
      try {
        await rewardedAd.show();
        setLoaded(false);
        // Preload next ad after a short delay
        setTimeout(() => {
          if (rewardedAd && !loading) {
            setLoading(true);
            rewardedAd.load();
          }
        }, 1000);
      } catch (error) {
        console.error('Error showing ad:', error);
      }
    }
  };

  const loadAd = () => {
    if (rewardedAd && !loaded && !loading) {
      setLoading(true);
      rewardedAd.load();
    }
  };

  return {
    loaded,
    loading,
    showAd,
    loadAd,
  };
};
