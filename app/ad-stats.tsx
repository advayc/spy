import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Alert, Animated } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, TrendingUp, Calendar, Award, BarChart3, Play, Eye, Sparkles, Heart, Trophy, Star, Zap } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAdsStore } from '@/stores/ads-store';
import { useTheme } from '@/hooks/useTheme';
import { useVibration } from '@/hooks/useVibration';
import { useRewardedAd } from '@/components/RewardedAd';
import { useSettingsStore } from '@/stores/settings-store';

export default function AdStatsScreen() {
  const {
    totalAdsWatched,
    lastAdWatchedAt,
    getAdsWatchedToday,
    getAdsWatchedThisWeek,
    resetAdStats,
  } = useAdsStore();

  const { colors } = useTheme();
  const { colorScheme } = useSettingsStore();
  const vibrate = useVibration();
  const { loaded, loading, showAd } = useRewardedAd();

  const adsToday = getAdsWatchedToday();
  const adsThisWeek = getAdsWatchedThisWeek();
  
  // Calculate achievement level based on total ads
  const getAchievementLevel = () => {
    if (totalAdsWatched >= 100) return { title: 'Legend', color: '#FFD700', icon: Trophy };
    if (totalAdsWatched >= 50) return { title: 'Champion', color: '#C0C0C0', icon: Award };
    if (totalAdsWatched >= 25) return { title: 'Supporter', color: '#CD7F32', icon: Star };
    if (totalAdsWatched >= 10) return { title: 'Helper', color: '#4CAF50', icon: Heart };
    return { title: 'Beginner', color: '#2196F3', icon: Sparkles };
  };

  const achievement = getAchievementLevel();

  const formatLastWatched = () => {
    if (!lastAdWatchedAt) return 'Never';
    
    const now = Date.now();
    const diff = now - lastAdWatchedAt;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  };

  const handleWatchAd = async () => {
    vibrate.light();
    if (loaded) {
      await showAd();
    } else {
      Alert.alert('Ad Not Ready', 'Please wait a moment while we load the ad.');
    }
  };

  const handleResetStats = () => {
    Alert.alert(
      'Reset Ad Statistics',
      'Are you sure you want to reset all ad statistics? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            resetAdStats();
            vibrate.success();
            Alert.alert('Stats Reset', 'All ad statistics have been reset.');
          },
        },
      ]
    );
  };

  const StatCard = ({ icon: Icon, title, value, subtitle, color, gradient }: any) => (
    <View style={[styles.statCard, { backgroundColor: colors.surface }]}>
      {gradient ? (
        <LinearGradient
          colors={[`${color}30`, `${color}10`]}
          style={styles.statIconContainer}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Icon size={28} color={color} strokeWidth={2.5} />
        </LinearGradient>
      ) : (
        <View style={[styles.statIconContainer, { backgroundColor: `${color}20` }]}>
          <Icon size={28} color={color} strokeWidth={2.5} />
        </View>
      )}
      <View style={styles.statContent}>
        <Text style={[styles.statTitle, { color: colors.textSecondary }]}>{title}</Text>
        <Text style={[styles.statValue, { color: colors.text }]}>{value}</Text>
        {subtitle && <Text style={[styles.statSubtitle, { color: colors.textSecondary }]}>{subtitle}</Text>}
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              vibrate.light();
              router.back();
            }}
            style={[styles.backButton, { backgroundColor: colors.surface }]}
          >
            <ArrowLeft size={24} color={colors.text} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: colors.text }]}>Ad Statistics</Text>
          <View style={styles.backButton} />
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Achievement Badge */}
          <View style={[styles.achievementCard, { backgroundColor: colors.surface }]}>
            <LinearGradient
              colors={[`${achievement.color}30`, `${achievement.color}10`]}
              style={styles.achievementBadge}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <achievement.icon size={40} color={achievement.color} strokeWidth={2.5} />
            </LinearGradient>
            <View style={styles.achievementText}>
              <Text style={[styles.achievementTitle, { color: colors.text }]}>
                {achievement.title}
              </Text>
              <Text style={[styles.achievementSubtitle, { color: colors.textSecondary }]}>
                {totalAdsWatched >= 100 ? 'You\'re a legend!' : 
                 totalAdsWatched >= 50 ? 'Amazing supporter!' : 
                 totalAdsWatched >= 25 ? 'Thanks for your support!' : 
                 totalAdsWatched >= 10 ? 'Keep it up!' : 
                 'Start your journey!'}
              </Text>
            </View>
            <View style={[styles.achievementLevel, { backgroundColor: `${achievement.color}20` }]}>
              <Text style={[styles.achievementLevelText, { color: achievement.color }]}>
                {totalAdsWatched}
              </Text>
            </View>
          </View>

          {/* Watch Ad Button */}
          <TouchableOpacity
            onPress={handleWatchAd}
            disabled={!loaded}
            style={[
              styles.watchAdButton,
              { opacity: loaded ? 1 : 0.5 }
            ]}
          >
            <LinearGradient
              colors={loaded ? [colorScheme.primary, colorScheme.secondary] : ['#666', '#555']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.watchAdGradient}
            >
              {loaded ? (
                <>
                  <Play size={26} color="white" fill="white" />
                  <Text style={styles.watchAdText}>Watch Rewarded Ad</Text>
                  <Zap size={20} color="#FFD700" fill="#FFD700" />
                </>
              ) : (
                <>
                  <Eye size={24} color="white" />
                  <Text style={styles.watchAdText}>
                    {loading ? 'Loading Ad...' : 'Ad Loading...'}
                  </Text>
                </>
              )}
            </LinearGradient>
          </TouchableOpacity>

          {/* Big Total Counter */}
          <View style={[styles.bigCounterCard, { backgroundColor: colors.surface }]}>
            <LinearGradient
              colors={[colorScheme.primary, colorScheme.secondary]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.bigCounterGradient}
            >
              <Award size={48} color="white" strokeWidth={2} />
              <View style={styles.bigCounterContent}>
                <Text style={styles.bigCounterLabel}>Total Ads Watched</Text>
                <Text style={styles.bigCounterValue}>{totalAdsWatched}</Text>
                <Text style={styles.bigCounterSubtext}>
                  {totalAdsWatched === 0 ? 'Watch your first ad!' : 
                   totalAdsWatched === 1 ? 'Great start!' : 
                   `Thank you for your support!`}
                </Text>
              </View>
            </LinearGradient>
          </View>

          {/* Stats Grid */}
          <View style={styles.statsGrid}>
            <View style={styles.statsRow}>
              <StatCard
                icon={Calendar}
                title="Today"
                value={adsToday}
                color="#4CAF50"
                gradient
              />
              
              <StatCard
                icon={TrendingUp}
                title="This Week"
                value={adsThisWeek}
                color="#2196F3"
                gradient
              />
            </View>
            
            <StatCard
              icon={BarChart3}
              title="Last Watched"
              value={formatLastWatched()}
              subtitle={lastAdWatchedAt ? new Date(lastAdWatchedAt).toLocaleDateString() : ''}
              color="#9C27B0"
              gradient
            />
          </View>

          {/* Info Section */}
          <View style={[styles.infoSection, { backgroundColor: colors.surface }]}>
            <View style={styles.infoHeader}>
              <Heart size={24} color={colorScheme.primary} fill={colorScheme.primary} />
              <Text style={[styles.infoTitle, { color: colors.text }]}>Support Development</Text>
            </View>
            <Text style={[styles.infoText, { color: colors.textSecondary }]}>
              Every ad you watch helps keep this app free and supports new feature development. Thank you for your support!
            </Text>
            
            {/* Achievement Milestones */}
            <View style={styles.milestones}>
              <View style={styles.milestone}>
                <View style={[styles.milestoneIcon, { 
                  backgroundColor: totalAdsWatched >= 10 ? '#4CAF5020' : '#33333320',
                  borderColor: totalAdsWatched >= 10 ? '#4CAF50' : '#333'
                }]}>
                  <Text style={styles.milestoneEmoji}>🌱</Text>
                </View>
                <Text style={[styles.milestoneText, { 
                  color: totalAdsWatched >= 10 ? colors.text : colors.textSecondary 
                }]}>10</Text>
              </View>
              
              <View style={styles.milestone}>
                <View style={[styles.milestoneIcon, { 
                  backgroundColor: totalAdsWatched >= 25 ? '#CD7F3220' : '#33333320',
                  borderColor: totalAdsWatched >= 25 ? '#CD7F32' : '#333'
                }]}>
                  <Text style={styles.milestoneEmoji}>🥉</Text>
                </View>
                <Text style={[styles.milestoneText, { 
                  color: totalAdsWatched >= 25 ? colors.text : colors.textSecondary 
                }]}>25</Text>
              </View>
              
              <View style={styles.milestone}>
                <View style={[styles.milestoneIcon, { 
                  backgroundColor: totalAdsWatched >= 50 ? '#C0C0C020' : '#33333320',
                  borderColor: totalAdsWatched >= 50 ? '#C0C0C0' : '#333'
                }]}>
                  <Text style={styles.milestoneEmoji}>🥈</Text>
                </View>
                <Text style={[styles.milestoneText, { 
                  color: totalAdsWatched >= 50 ? colors.text : colors.textSecondary 
                }]}>50</Text>
              </View>
              
              <View style={styles.milestone}>
                <View style={[styles.milestoneIcon, { 
                  backgroundColor: totalAdsWatched >= 100 ? '#FFD70020' : '#33333320',
                  borderColor: totalAdsWatched >= 100 ? '#FFD700' : '#333'
                }]}>
                  <Text style={styles.milestoneEmoji}>🏆</Text>
                </View>
                <Text style={[styles.milestoneText, { 
                  color: totalAdsWatched >= 100 ? colors.text : colors.textSecondary 
                }]}>100</Text>
              </View>
            </View>
          </View>

          {/* Reset Button */}
          <TouchableOpacity
            onPress={handleResetStats}
            style={[styles.resetButton, { backgroundColor: colors.surface }]}
          >
            <Text style={[styles.resetText, { color: '#F44336' }]}>Reset Statistics</Text>
          </TouchableOpacity>

          <View style={styles.bottomPadding} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  achievementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    marginBottom: 16,
    gap: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  achievementBadge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  achievementText: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 4,
  },
  achievementSubtitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  achievementLevel: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  achievementLevelText: {
    fontSize: 20,
    fontWeight: '800',
  },
  watchAdButton: {
    marginBottom: 24,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  watchAdGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    gap: 12,
  },
  watchAdText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  bigCounterCard: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  bigCounterGradient: {
    padding: 32,
    alignItems: 'center',
    gap: 16,
  },
  bigCounterContent: {
    alignItems: 'center',
  },
  bigCounterLabel: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  bigCounterValue: {
    color: 'white',
    fontSize: 72,
    fontWeight: '900',
    lineHeight: 72,
    marginBottom: 8,
  },
  bigCounterSubtext: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    fontWeight: '500',
  },
  statsGrid: {
    gap: 12,
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    gap: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statContent: {
    flex: 1,
  },
  statTitle: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  statValue: {
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 32,
  },
  statSubtitle: {
    fontSize: 11,
    marginTop: 4,
    fontWeight: '500',
  },
  infoSection: {
    padding: 24,
    borderRadius: 20,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '800',
  },
  infoText: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 20,
  },
  milestones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  milestone: {
    alignItems: 'center',
    gap: 8,
  },
  milestoneIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  milestoneEmoji: {
    fontSize: 28,
  },
  milestoneText: {
    fontSize: 14,
    fontWeight: '700',
  },
  resetButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  resetText: {
    fontSize: 16,
    fontWeight: '600',
  },
  bottomPadding: {
    height: 32,
  },
});
