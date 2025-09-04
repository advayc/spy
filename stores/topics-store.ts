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
  addTopic: (topic: Omit<Topic, 'id'>) => void;
  removeTopic: (id: string) => void;
  updateTopic: (id: string, updates: Partial<Topic>) => void;
  resetToDefaults: () => void;
}

export const useTopicsStore = create<TopicsStore>()(
  persist(
    (set, get) => ({
      topics: defaultTopics,

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
        set({ topics: defaultTopics });
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
    }
  )
);