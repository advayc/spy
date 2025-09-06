import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { Eye, Play, Settings, Cog, Target, Users } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSettingsStore } from '@/stores/settings-store';
import { useTheme } from '@/hooks/useTheme';
import { useVibration } from '@/hooks/useVibration';

export default function WelcomeScreen() {
  const { colorScheme, defaultGameMode, setDefaultGameMode } = useSettingsStore();
  const { colors } = useTheme();
  const vibrate = useVibration();

  const handleSpyGame = () => {
    vibrate.medium();
    router.push('/create-game');
  };

  const handleRangeGame = () => {
    vibrate.medium();
    router.push('/range-game');
  };

  const handleQuickStart = () => {
    vibrate.medium();
    if (defaultGameMode === 'spy') {
      router.push('/create-game');
    } else {
      router.push('/range-game');
    }
  };

  const handleManageTopics = () => {
    vibrate.light();
    router.push('/topics');
  };

  const handleSettings = () => {
    vibrate.light();
    router.push('/settings');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Settings Button */}
      <TouchableOpacity 
        style={[styles.settingsButton, { backgroundColor: `${colors.primary}20` }]}
        onPress={handleSettings}
      >
        <Cog size={24} color={colors.primary} />
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Eye size={120} color={colors.primary} strokeWidth={2} />
          <Text style={[styles.title, { color: colors.accent }]}>Spy Games</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>Social Deduction Party Games</Text>
        </View>

        <View style={styles.buttonContainer}>
          {/* Quick Start - Default Game */}
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={handleQuickStart}
          >
            <LinearGradient
              colors={[colors.primary, colors.secondary]}
              style={styles.gradientButton}
            >
              <Play size={24} color="white" />
              <View style={styles.buttonTextContainer}>
                <Text style={styles.primaryButtonText}>Quick Start</Text>
                <Text style={styles.buttonSubtext}>
                  {defaultGameMode === 'spy' ? 'Guess the Spy' : 'Range Game'}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          {/* Game Mode Buttons */}
          <View style={styles.gameModeContainer}>
            <TouchableOpacity 
              style={[
                styles.gameModeButton, 
                { borderColor: `${colors.primary}40` },
                defaultGameMode === 'spy' && { borderColor: colors.primary, borderWidth: 2 }
              ]}
              onPress={handleSpyGame}
            >
              <Eye size={20} color={colors.primary} />
              <Text style={[styles.gameModeButtonText, { color: colors.accent }]}>Guess the Spy</Text>
              <Text style={[styles.gameModeSubtext, { color: colors.textSecondary }]}>
                Classic deduction game
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[
                styles.gameModeButton, 
                { borderColor: `${colors.primary}40` },
                defaultGameMode === 'range' && { borderColor: colors.primary, borderWidth: 2 }
              ]}
              onPress={handleRangeGame}
            >
              <Target size={20} color={colors.primary} />
              <Text style={[styles.gameModeButtonText, { color: colors.accent }]}>Range Game</Text>
              <Text style={[styles.gameModeSubtext, { color: colors.textSecondary }]}>
                Number guessing variant
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={[styles.secondaryButton, { borderColor: `${colors.primary}40` }]}
            onPress={handleManageTopics}
          >
            <Settings size={20} color={colors.primary} />
            <Text style={[styles.secondaryButtonText, { color: colors.accent }]}>Manage Topics</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.infoText, { color: colors.textSecondary }]}>
            Social deduction games for 3-15 players
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 10,
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  primaryButton: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },
  gradientButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 32,
    gap: 12,
  },
  buttonTextContainer: {
    alignItems: 'center',
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonSubtext: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    marginTop: 2,
  },
  gameModeContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  gameModeButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    minHeight: 80,
  },
  gameModeButtonText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 4,
  },
  gameModeSubtext: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 2,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    borderWidth: 1,
    gap: 8,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  infoContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  infoText: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
});