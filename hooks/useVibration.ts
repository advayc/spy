import * as Haptics from 'expo-haptics';
import { useSettingsStore } from '@/stores/settings-store';

export const useVibration = () => {
  const { vibrationsEnabled } = useSettingsStore();

  const vibrate = {
    light: () => {
      if (vibrationsEnabled) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
    },
    medium: () => {
      if (vibrationsEnabled) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      }
    },
    heavy: () => {
      if (vibrationsEnabled) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      }
    },
    success: () => {
      if (vibrationsEnabled) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
    },
    warning: () => {
      if (vibrationsEnabled) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      }
    },
    error: () => {
      if (vibrationsEnabled) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      }
    },
    selection: () => {
      if (vibrationsEnabled) {
        Haptics.selectionAsync();
      }
    }
  };

  return vibrate;
};
