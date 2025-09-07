import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface RangeQuestion {
  id: string;
  question: string;
  range: string;
  category: string;
  isCustom: boolean;
}

export interface RangeCategory {
  id: string;
  name: string;
  icon: string;
  isCustom: boolean;
}

interface RangeTopicsState {
  customQuestions: RangeQuestion[];
  customCategories: RangeCategory[];
  
  // Question management
  addCustomQuestion: (question: Omit<RangeQuestion, 'id' | 'isCustom'>) => void;
  updateCustomQuestion: (id: string, updates: Partial<Omit<RangeQuestion, 'id' | 'isCustom'>>) => void;
  removeCustomQuestion: (id: string) => void;
  getQuestionsForCategory: (categoryId: string) => RangeQuestion[];
  
  // Category management
  addCustomCategory: (category: Omit<RangeCategory, 'id' | 'isCustom'>) => void;
  updateCustomCategory: (id: string, updates: Partial<Omit<RangeCategory, 'id' | 'isCustom'>>) => void;
  removeCustomCategory: (id: string) => void;
  getAllCategories: () => RangeCategory[];
  
  // Utility
  resetCustomData: () => void;
}

export const useRangeTopicsStore = create<RangeTopicsState>()(
  persist(
    (set, get) => ({
      customQuestions: [],
      customCategories: [],
      
      // Question management
      addCustomQuestion: (questionData) => {
        const newQuestion: RangeQuestion = {
          id: `custom_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          ...questionData,
          isCustom: true,
        };
        
        set((state) => ({
          customQuestions: [...state.customQuestions, newQuestion],
        }));
      },
      
      updateCustomQuestion: (id, updates) => {
        set((state) => ({
          customQuestions: state.customQuestions.map((q) =>
            q.id === id ? { ...q, ...updates } : q
          ),
        }));
      },
      
      removeCustomQuestion: (id) => {
        set((state) => ({
          customQuestions: state.customQuestions.filter((q) => q.id !== id),
        }));
      },
      
      getQuestionsForCategory: (categoryId) => {
        const state = get();
        return state.customQuestions.filter((q) => q.category === categoryId);
      },
      
      // Category management
      addCustomCategory: (categoryData) => {
        const newCategory: RangeCategory = {
          id: `category_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          ...categoryData,
          isCustom: true,
        };
        
        set((state) => ({
          customCategories: [...state.customCategories, newCategory],
        }));
      },
      
      updateCustomCategory: (id, updates) => {
        set((state) => ({
          customCategories: state.customCategories.map((c) =>
            c.id === id ? { ...c, ...updates } : c
          ),
        }));
      },
      
      removeCustomCategory: (id) => {
        const state = get();
        // Remove all questions in this category first
        const questionsToRemove = state.customQuestions.filter((q) => q.category === id);
        questionsToRemove.forEach((q) => get().removeCustomQuestion(q.id));
        
        // Remove the category
        set((state) => ({
          customCategories: state.customCategories.filter((c) => c.id !== id),
        }));
      },
      
      getAllCategories: () => {
        return get().customCategories;
      },
      
      // Utility
      resetCustomData: () => {
        set({
          customQuestions: [],
          customCategories: [],
        });
      },
    }),
    {
      name: 'range-topics-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
