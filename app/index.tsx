import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { Eye, Play, Settings, Cog } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSettingsStore } from '@/stores/settings-store';
import { useTheme } from '@/hooks/useTheme';
import { useVibration } from '@/hooks/useVibration';

export default function WelcomeScreen() {
  const { colorScheme } = useSettingsStore();
  const { colors } = useTheme();
  const vibrate = useVibration();

  const handleCreateGame = () => {
    vibrate.medium();
    router.push('/create-game');
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
            <Eye size={120} color={colors.accent} strokeWidth={2} />
          <Text style={[styles.title, { color: colors.accent }]}>Spy</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>Social Deduction Party Game</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={handleCreateGame}
          >
            <LinearGradient
              colors={[colors.primary, colors.secondary]}
              style={styles.gradientButton}
            >
              <Play size={24} color="white" />
              <Text style={styles.primaryButtonText}>Create Game</Text>
            </LinearGradient>
          </TouchableOpacity>

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
            A game of deception and deduction for 3-15 players
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
    marginBottom: 80,
  },
  // removed iconContainer, no background around Eye icon
  logoImage: {
    width: 80,
    height: 80,
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
  },
  gradientButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 32,
    gap: 12,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
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
    marginTop: 60,
    paddingHorizontal: 20,
  },
  infoText: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
});