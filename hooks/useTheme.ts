import { createContext, useContext } from 'react';
import { useSettingsStore } from '@/stores/settings-store';

export interface ThemeColors {
  background: string;
  surface: string;
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  textSecondary: string;
  border: string;
  success: string;
  warning: string;
  error: string;
}

export const useTheme = () => {
  const { darkMode, colorScheme } = useSettingsStore();

  const lightColors: ThemeColors = {
    background: '#ffffff',
    surface: '#f8f9fa',
    primary: colorScheme.primary,
    secondary: colorScheme.secondary,
    accent: colorScheme.accent,
    text: '#000000',
    textSecondary: '#666666',
    border: '#e1e5e9',
    success: '#4CAF50',
    warning: '#FF9500',
    error: '#F44336',
  };

  const darkColors: ThemeColors = {
    background: '#000000',
    surface: '#1a1a1a',
    primary: colorScheme.primary,
    secondary: colorScheme.secondary,
    accent: colorScheme.accent,
    text: '#ffffff',
    textSecondary: '#888888',
    border: '#333333',
    success: '#4CAF50',
    warning: '#FF9500',
    error: '#F44336',
  };

  const colors = darkMode ? darkColors : lightColors;

  return { colors, isDark: darkMode };
};
