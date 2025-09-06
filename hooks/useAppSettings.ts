import { useSettingsStore } from '@/stores/settings-store';
import { useEffect } from 'react';
import { Appearance } from 'react-native';

export const useAppSettings = () => {
  const { darkMode, colorScheme, rolesEnabled, soundEnabled, vibrationsEnabled } = useSettingsStore();

  useEffect(() => {
    // Apply dark mode to system
    if (darkMode) {
      Appearance.setColorScheme('dark');
    } else {
      Appearance.setColorScheme('light');
    }
  }, [darkMode]);

  // Helper functions for consistent styling
  const getThemeColors = () => ({
    primary: colorScheme.primary,
    secondary: colorScheme.secondary,
    accent: colorScheme.accent,
    background: darkMode ? '#000000' : '#ffffff',
    surface: darkMode ? '#111111' : '#f5f5f5',
    text: darkMode ? '#ffffff' : '#000000',
    textSecondary: darkMode ? '#888888' : '#666666',
    border: darkMode ? '#333333' : '#e0e0e0',
  });

  const getPrimaryGradient = () => [colorScheme.primary, colorScheme.secondary];

  const getButtonStyle = (type: 'primary' | 'secondary') => {
    const colors = getThemeColors();
    
    if (type === 'primary') {
      return {
        backgroundColor: colorScheme.primary,
        borderColor: colorScheme.primary,
      };
    } else {
      return {
        backgroundColor: 'transparent',
        borderColor: `${colorScheme.primary}40`,
      };
    }
  };

  return {
    settings: {
      darkMode,
      colorScheme,
      rolesEnabled,
      soundEnabled,
      vibrationsEnabled,
    },
    theme: getThemeColors(),
    getPrimaryGradient,
    getButtonStyle,
  };
};
