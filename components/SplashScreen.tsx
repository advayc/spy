import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Eye } from 'lucide-react-native';
import { useSettingsStore } from '@/stores/settings-store';
import { useTheme } from '@/hooks/useTheme';

export default function SplashScreen() {
  const settings = useSettingsStore();
  const colorScheme = settings?.colorScheme ?? { primary: '#007AFF' };
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <View style={[styles.eyeContainer, { backgroundColor: `${colorScheme.primary}20` }]}> 
          <Eye size={80} color={colorScheme.primary} strokeWidth={2} />
        </View>
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: colors.text }]}>Spy</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>Social Deduction Party Game</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },
});