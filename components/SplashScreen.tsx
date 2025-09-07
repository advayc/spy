import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Eye } from 'lucide-react-native';
import { useSettingsStore } from '@/stores/settings-store';

export default function SplashScreen() {
  try {
    const { colorScheme } = useSettingsStore();

    return (
      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={[styles.eyeContainer, { backgroundColor: `${colorScheme.primary}20` }]}>
            <Eye size={80} color={colorScheme.primary} strokeWidth={2} />
          </View>
        </View>

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Spy</Text>
          <Text style={styles.subtitle}>Social Deduction Party Game</Text>
        </View>
      </View>
    );
  } catch (error) {
    console.error('SplashScreen error:', error);
    return (
      <View style={styles.container}>
        {/* Fallback UI */}
        <View style={styles.logoContainer}>
          <View style={styles.eyeContainer}>
            <Eye size={80} color="#007AFF" strokeWidth={2} />
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Spy</Text>
          <Text style={styles.subtitle}>Social Deduction Party Game</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  eyeContainer: {
    padding: 20,
    borderRadius: 50,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
  },
});