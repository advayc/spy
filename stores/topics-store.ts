import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { defaultTopics } from '@/data/default-topics';

export interface Topic {
  id: string;
  name: string;
  category: string;
  roles: string[];
}

interface TopicsStore {
  topics: Topic[];
  // track builtin topics that users removed so they don't reappear
  deletedBuiltinTopicIds: string[];
  // recently used topic timestamps (ms) to reduce repeats across games
  recentlyUsedTopicTimestamps: Record<string, number>;
  addTopic: (topic: Omit<Topic, 'id'>) => void;
  removeTopic: (id: string) => void;
  updateTopic: (id: string, updates: Partial<Topic>) => void;
  resetToDefaults: () => void;
  // Helpers for selection
  markTopicUsed: (id: string) => void;
  getSelectableTopics: (category?: string, cooldownHours?: number) => Topic[];
}

export const useTopicsStore = create<TopicsStore>()(
  persist(
    (set, get) => ({
      topics: defaultTopics,
      deletedBuiltinTopicIds: [],
      recentlyUsedTopicTimestamps: {},

      addTopic: (topicData) => {
        const newTopic: Topic = {
          ...topicData,
          id: Date.now().toString(),
        };
        set((state) => ({
          topics: [...state.topics, newTopic],
        }));
      },

      removeTopic: (id: string) => {
        // If the topic is one of the default builtin topics, mark it as deleted so it won't reappear
        const isBuiltin = defaultTopics.some(t => t.id === id);
        if (isBuiltin) {
          set(state => ({
            deletedBuiltinTopicIds: Array.from(new Set([...state.deletedBuiltinTopicIds, id])),
            topics: state.topics.filter((topic) => topic.id !== id),
          }));
          return;
        }

        set((state) => ({
          topics: state.topics.filter((topic) => topic.id !== id),
        }));
      },

      updateTopic: (id: string, updates: Partial<Topic>) => {
        set((state) => ({
          topics: state.topics.map((topic) =>
            topic.id === id ? { ...topic, ...updates } : topic
          ),
        }));
      },

      resetToDefaults: () => {
        // Complete reset - restore all default topics and clear all user data
        set({ 
          topics: [...defaultTopics], 
          deletedBuiltinTopicIds: [], 
          recentlyUsedTopicTimestamps: {} 
        });
      },

      markTopicUsed: (id: string) => {
        const ts = Date.now();
        set(state => ({
          recentlyUsedTopicTimestamps: { ...state.recentlyUsedTopicTimestamps, [id]: ts }
        }));
      },

      getSelectableTopics: (category?: string, cooldownHours = 24) => {
        const state = get();
        const cutoff = Date.now() - cooldownHours * 60 * 60 * 1000;

        // Build base list excluding any builtin topics that were deleted
        let base = state.topics.filter(t => !state.deletedBuiltinTopicIds.includes(t.id));
        if (category && category !== 'random') {
          base = base.filter(t => t.category === category);
        }

        // Filter out recently used topics
        const filtered = base.filter(t => {
          const ts = state.recentlyUsedTopicTimestamps[t.id];
          return !ts || ts < cutoff;
        });

        // If filtering removed everything, return base (so we always have options)
        const result = filtered.length > 0 ? filtered : base;

        // Shuffle result (Fisher-Yates)
        const arr = [...result];
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      },
    }),
    {
      name: 'spy-topics-storage',
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
      onRehydrateStorage: () => (state) => {
        if (!state) return;

        // 1) Respect deleted builtins: ensure any deleted default topics are not present
        if (state.deletedBuiltinTopicIds?.length) {
          state.topics = state.topics.filter(t => !state.deletedBuiltinTopicIds.includes(t.id));
        }

        // 2) Migration: merge in any NEW default topics that don't exist yet and weren't deleted
        try {
          const existingIds = new Set(state.topics.map(t => t.id));
          const deletedIds = new Set(state.deletedBuiltinTopicIds || []);
          const missingDefaults = defaultTopics.filter(dt => !existingIds.has(dt.id) && !deletedIds.has(dt.id));
          if (missingDefaults.length) {
            state.topics = [...state.topics, ...missingDefaults];
          }
        } catch (e) {
          // best-effort; do not crash
          // eslint-disable-next-line no-console
          console.warn('topics-store migration merge failed:', e);
        }
      },
    }
  )
);