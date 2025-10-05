import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AdStats {
  totalAdsWatched: number;
  lastAdWatchedAt: number | null;
  adWatchHistory: { timestamp: number; adUnitId: string }[];
}

interface AdsState extends AdStats {
  incrementAdCount: (adUnitId: string) => void;
  resetAdStats: () => void;
  getAdsWatchedToday: () => number;
  getAdsWatchedThisWeek: () => number;
}

const defaultStats: AdStats = {
  totalAdsWatched: 0,
  lastAdWatchedAt: null,
  adWatchHistory: [],
};

export const useAdsStore = create<AdsState>()(
  persist(
    (set, get) => ({
      ...defaultStats,

      incrementAdCount: (adUnitId: string) => {
        const now = Date.now();
        set((state) => ({
          totalAdsWatched: state.totalAdsWatched + 1,
          lastAdWatchedAt: now,
          adWatchHistory: [
            ...state.adWatchHistory,
            { timestamp: now, adUnitId }
          ].slice(-100), // Keep only last 100 ad views
        }));
      },

      resetAdStats: () => set(defaultStats),

      getAdsWatchedToday: () => {
        const history = get().adWatchHistory;
        const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
        return history.filter(ad => ad.timestamp > oneDayAgo).length;
      },

      getAdsWatchedThisWeek: () => {
        const history = get().adWatchHistory;
        const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
        return history.filter(ad => ad.timestamp > oneWeekAgo).length;
      },
    }),
    {
      name: 'ads-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
