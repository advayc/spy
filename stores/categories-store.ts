import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface CategoryMeta {
  id: string; // slug id, e.g., 'locations'
  name: string; // Human name
  icon: string; // Emoji or short icon text
  useRoles: boolean; // Whether topics in this category use roles
}

// Built-in categories shipped with the app
export const builtinCategories: Record<string, { name: string; icon: string; useRoles?: boolean }> = {
  'locations': { name: 'Locations', icon: '📍', useRoles: true },
  'movies': { name: 'Movies', icon: '🎬', useRoles: true },
  'tv-shows': { name: 'TV Shows', icon: '📺', useRoles: true },
  'pop-culture': { name: 'Pop Culture', icon: '⭐', useRoles: true },
  'events': { name: 'Events', icon: '🎉', useRoles: true },
  'sports': { name: 'Sports', icon: '⚽', useRoles: true },
  'music': { name: 'Music', icon: '🎵', useRoles: true },
  'science': { name: 'Science', icon: '🔬', useRoles: true },
  'history': { name: 'History', icon: '📜', useRoles: true },
  'internet': { name: 'Internet', icon: '🌐', useRoles: true },
  'famous-people': { name: 'Famous People', icon: '🌟', useRoles: true },
};

interface CategoriesStore {
  customCategories: CategoryMeta[];
  addCategory: (cat: Omit<CategoryMeta, 'id'> & { id?: string }) => void;
  updateCategory: (id: string, updates: Partial<CategoryMeta>) => void;
  removeCategory: (id: string) => void;
  getAllCategories: () => CategoryMeta[]; // Merged view (builtin + custom)
  getCategory: (id: string) => CategoryMeta | undefined; // Merged lookup
}

export const useCategoriesStore = create<CategoriesStore>()(
  persist(
    (set, get) => ({
      customCategories: [],

      addCategory: ({ id, name, icon, useRoles }) => {
        const makeId = (s: string) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const finalId = id && id.trim() ? makeId(id) : makeId(name);

        // Avoid duplicates against builtins or existing custom
        if (builtinCategories[finalId]) {
          // Built-in id not allowed for custom
          return;
        }
        const exists = get().customCategories.some(c => c.id === finalId);
        if (exists) return;

        const newCat: CategoryMeta = { id: finalId, name, icon, useRoles };
        set(state => ({ customCategories: [...state.customCategories, newCat] }));
      },

      updateCategory: (id, updates) => {
        set(state => ({
          customCategories: state.customCategories.map(c => c.id === id ? { ...c, ...updates, id: c.id } : c),
        }));
      },

      removeCategory: (id) => {
        set(state => ({ customCategories: state.customCategories.filter(c => c.id !== id) }));
      },

      getAllCategories: () => {
        const customs = get().customCategories;
        const builtins: CategoryMeta[] = Object.entries(builtinCategories).map(([id, v]) => ({
          id,
          name: v.name,
          icon: v.icon,
          useRoles: v.useRoles ?? true,
        }));
        return [...builtins, ...customs];
      },

      getCategory: (id) => {
        const custom = get().customCategories.find(c => c.id === id);
        if (custom) return custom;
        const builtin = builtinCategories[id];
        return builtin ? { id, name: builtin.name, icon: builtin.icon, useRoles: builtin.useRoles ?? true } : undefined;
      },
    }),
    {
      name: 'spy-categories-storage',
      storage: {
        getItem: async (name: string) => {
          const value = await AsyncStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: async (name: string, value: any) => {
          await AsyncStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: async (name: string) => {
          await AsyncStorage.removeItem(name);
        },
      },
    }
  )
);
