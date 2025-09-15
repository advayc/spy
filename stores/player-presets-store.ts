import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface PlayerPreset {
  id: string;
  name: string;
  players: { id: string; name: string }[];
}

interface PlayerPresetsState {
  presets: PlayerPreset[];
  addPreset: (name: string, players: { id: string; name: string }[]) => void;
  deletePreset: (id: string) => void;
  updatePreset: (id: string, name: string, players: { id: string; name: string }[]) => void;
}

export const usePlayerPresetsStore = create<PlayerPresetsState>()(
  persist(
    (set, get) => ({
      presets: [],
      addPreset: (name, players) => {
        const id = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
        set({ presets: [...get().presets, { id, name, players }] });
      },
      deletePreset: (id) => {
        set({ presets: get().presets.filter(p => p.id !== id) });
      },
      updatePreset: (id, name, players) => {
        set({ presets: get().presets.map(p => p.id === id ? { ...p, name, players } : p) });
      },
    }),
    {
      name: 'player-presets-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
