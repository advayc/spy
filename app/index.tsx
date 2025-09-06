import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { Eye, Play, Settings, Cog } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSettingsStore } from '@/stores/settings-store';

export default function WelcomeScreen() {
  const { colorScheme } = useSettingsStore();

  return (
    <SafeAreaView style={styles.container}>
      {/* Settings Button */}
      <TouchableOpacity 
        style={styles.settingsButton}
        onPress={() => router.push('/settings')}
      >
        <Cog size={24} color="white" />
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={[styles.eyeContainer, { backgroundColor: `${colorScheme.primary}20` }]}>
            <Eye size={80} color={colorScheme.primary} strokeWidth={2} />
          </View>
          <Text style={styles.title}>Spy</Text>
          <Text style={styles.subtitle}>Social Deduction Party Game</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => router.push('/create-game')}
          >
            <LinearGradient
              colors={[colorScheme.primary, colorScheme.secondary]}
              style={styles.gradientButton}
            >
              <Play size={24} color="white" />
              <Text style={styles.primaryButtonText}>Create Game</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.secondaryButton, { borderColor: `${colorScheme.primary}40` }]}
            onPress={() => router.push('/topics')}
          >
            <Settings size={20} color={colorScheme.primary} />
            <Text style={[styles.secondaryButtonText, { color: colorScheme.primary }]}>Manage Topics</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
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
    backgroundColor: '#000000',
  },
  settingsButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 10,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
  eyeContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666666',
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
    borderColor: '#007AFF',
    gap: 8,
  },
  secondaryButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '500',
  },
  infoContainer: {
    marginTop: 60,
    paddingHorizontal: 20,
  },
  infoText: {
    color: '#888888',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
});