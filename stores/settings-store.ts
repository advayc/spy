import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ColorScheme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
}

interface SettingsState {
  // Color scheme
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  customSchemes: ColorScheme[];
  addCustomScheme: (scheme: ColorScheme) => void;
  removeCustomScheme: (name: string) => void;
  
  // Game settings
  defaultGameMode: 'spy' | 'range';
  setDefaultGameMode: (mode: 'spy' | 'range') => void;
  rolesEnabled: boolean;
  setRolesEnabled: (enabled: boolean) => void;
  autoStartTimer: boolean;
  setAutoStartTimer: (enabled: boolean) => void;
  
  // Audio & feedback
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  vibrationsEnabled: boolean;
  setVibrationsEnabled: (enabled: boolean) => void;
  notificationsEnabled: boolean;
  setNotificationsEnabled: (enabled: boolean) => void;
  
  // Appearance
  darkMode: boolean;
  setDarkMode: (enabled: boolean) => void;
  
  // Actions
  resetAllSettings: () => void;
  // Spy settings
  minSpies: number;
  setMinSpies: (n: number) => void;
  maxSpies: number;
  setMaxSpies: (n: number) => void;
  // Spy reveal option
  revealOtherSpies: boolean;
  setRevealOtherSpies: (enabled: boolean) => void;
  // Player presets feature
  playerPresetsEnabled: boolean;
  setPlayerPresetsEnabled: (enabled: boolean) => void;
}

const defaultColorScheme: ColorScheme = {
  name: 'Ocean Blue',
  primary: '#007AFF',
  secondary: '#2196F3',
  accent: '#5AC8FA',
};

export const redColorScheme: ColorScheme = {
  name: 'Crimson Red',
  primary: '#DC2626',
  secondary: '#EF4444',
  accent: '#F87171',
};

const defaultSettings = {
  colorScheme: defaultColorScheme,
  customSchemes: [] as ColorScheme[],
  defaultGameMode: 'spy' as 'spy' | 'range',
  rolesEnabled: true,
  autoStartTimer: false,
  soundEnabled: true,
  vibrationsEnabled: true,
  notificationsEnabled: true,
  darkMode: true,
  minSpies: 0,
  maxSpies: 15,
  revealOtherSpies: false,
  playerPresetsEnabled: true,
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      ...defaultSettings,
      
      setColorScheme: (scheme) => set({ colorScheme: scheme }),
      setDefaultGameMode: (mode) => set({ defaultGameMode: mode }),
      setRolesEnabled: (enabled) => set({ rolesEnabled: enabled }),
      setAutoStartTimer: (enabled) => set({ autoStartTimer: enabled }),
      setSoundEnabled: (enabled) => set({ soundEnabled: enabled }),
      setVibrationsEnabled: (enabled) => set({ vibrationsEnabled: enabled }),
      setNotificationsEnabled: (enabled) => set({ notificationsEnabled: enabled }),
      setDarkMode: (enabled) => set({ darkMode: enabled }),
  revealOtherSpies: defaultSettings.revealOtherSpies,
  setRevealOtherSpies: (enabled: boolean) => set({ revealOtherSpies: enabled }),
  playerPresetsEnabled: defaultSettings.playerPresetsEnabled,
  setPlayerPresetsEnabled: (enabled: boolean) => set({ playerPresetsEnabled: enabled }),
      // Spy count settings with simple validation/clamping
      minSpies: defaultSettings.minSpies,
      maxSpies: defaultSettings.maxSpies,
      setMinSpies: (n: number) => {
        const max = get().maxSpies ?? 15;
        const clamped = Math.max(0, Math.min(Math.floor(n || 0), max));
        set({ minSpies: clamped });
      },
      setMaxSpies: (n: number) => {
        const min = get().minSpies ?? 0;
        // cap global maximum at 15 (runtime will also clamp by player count)
        const clamped = Math.max(min, Math.min(Math.floor(n || 0), 15));
        set({ maxSpies: clamped });
      },
      // removed allowMaxSpies toggle
      
      addCustomScheme: (scheme) => {
        const current = get().customSchemes;
        // Ensure unique name by appending a counter if needed
        let base = scheme.name?.trim() || 'Custom';
        let unique = base;
        let i = 2;
        while (current.some(s => s.name === unique)) {
          unique = `${base} ${i++}`;
        }
        const finalScheme = { ...scheme, name: unique };
        set({ customSchemes: [...current, finalScheme] });
        // Optionally select the newly added scheme
        set({ colorScheme: finalScheme });
      },
      removeCustomScheme: (name) => {
        const filtered = get().customSchemes.filter(s => s.name !== name);
        set({ customSchemes: filtered });
        // If the current scheme was removed, revert to default
        if (get().colorScheme.name === name) {
          set({ colorScheme: defaultColorScheme });
        }
      },
      
  resetAllSettings: () => set(defaultSettings),
    }),
    {
      name: 'settings-storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        // console.log('Settings store rehydrated:', state);
      },
      skipHydration: false,
    }
  )
);
