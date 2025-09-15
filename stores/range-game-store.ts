import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RangeQuestion, getRandomQuestion, rangeQuestions } from '@/data/range-questions';
import { useSettingsStore } from './settings-store';

export interface RangePlayer {
  id: string;
  name: string;
  isspy: boolean; // The person who gets the range
  hasRevealed: boolean;
}

export interface RangeGameState {
  // Game setup
  players: RangePlayer[];
  currentQuestion: RangeQuestion | null;
  usedQuestionIds: string[];
  selectedCategory: string;
  
  // Game state
  gameStarted: boolean;
  gamePhase: 'setup' | 'playing' | 'discussion' | 'voting' | 'results';
  timerDuration: number; // minutes
  currentTimer: number; // seconds remaining
  numspies: number | 'random';
  
  // Results
  votes: Record<string, string>; // playerId -> votedPlayerId
  correctGuesses: number;
  gamesPlayed: number;
  
  // Actions
  addPlayer: (name: string) => void;
  removePlayer: (id: string) => void;
  updatePlayer: (id: string, updates: Partial<RangePlayer>) => void;
  clearPlayers: () => void;
  setPlayers: (players: { id: string; name: string }[]) => void;
  
  setTimerDuration: (minutes: number) => void;
  setCurrentTimer: (seconds: number) => void;
  setSelectedCategory: (category: string) => void;
  setNumspies: (n: number | 'random') => void;
  
  startGame: (spyCount?: number | 'random') => void;
  startGameWithCustom: (customQuestions: RangeQuestion[], spyCount?: number | 'random') => void;
  nextPhase: () => void;
  endGame: () => void;
  resetGame: () => void;
  
  selectNewQuestion: () => void;
  selectNewQuestionWithCustom: (customQuestions: RangeQuestion[]) => void;
  addVote: (voterId: string, targetId: string) => void;
  clearVotes: () => void;
  
  // Stats
  incrementGamesPlayed: () => void;
  incrementCorrectGuesses: () => void;
}

export const useRangeGameStore = create<RangeGameState>()(
  persist(
    (set, get) => ({
      // Initial state
      players: [],
      currentQuestion: null,
      usedQuestionIds: [],
      selectedCategory: 'random',
      gameStarted: false,
      gamePhase: 'setup',
      timerDuration: 8,
      currentTimer: 0,
  numspies: 1,
      votes: {},
      correctGuesses: 0,
      gamesPlayed: 0,
      
      // Player management
      addPlayer: (name) => {
        const state = get();
        if (state.players.length >= 15) return;
        
        const newPlayer: RangePlayer = {
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          name: name.trim(),
          isspy: false,
          hasRevealed: false,
        };
        
        set({ players: [...state.players, newPlayer] });
      },
      
      removePlayer: (id) => {
        set(state => ({
          players: state.players.filter(p => p.id !== id)
        }));
      },
      
      updatePlayer: (id, updates) => {
        set(state => ({
          players: state.players.map(p => 
            p.id === id ? { ...p, ...updates } : p
          )
        }));
      },
      
      clearPlayers: () => {
  // Explicit action to clear players when the user explicitly removes them or starts a fresh setup
  set({ players: [] });
      },

      setPlayers: (players) => {
        set({ 
          players: players.map(p => ({
            id: p.id,
            name: p.name,
            isspy: false,
            hasRevealed: false
          }))
        });
      },
      
      // Timer management
      setTimerDuration: (minutes) => {
        set({ timerDuration: minutes });
      },
      
      setCurrentTimer: (seconds) => {
        set({ currentTimer: seconds });
      },

      setSelectedCategory: (category) => {
        set({ selectedCategory: category });
      },
      
      // Game flow
      startGame: (spyCount?: number | 'random') => {
        const state = get();
        const actualSpyCount = spyCount !== undefined ? spyCount : state.numspies;
        if (state.players.length < 3) return;
        
        // Reset all players
        const resetPlayers = state.players.map(p => ({
          ...p,
          isspy: false,
          hasRevealed: false
        }));
        
        // Determine number of spies. Random uses global min/max settings and clamps to player count.
        const { minSpies, maxSpies } = useSettingsStore.getState();
        const dynamicMax = Math.max(0, Math.min(maxSpies, resetPlayers.length, 15));
        const dynamicMin = Math.max(0, Math.min(minSpies, dynamicMax));
        const numSpies = actualSpyCount === 'random'
          ? (dynamicMin + Math.floor(Math.random() * (dynamicMax - dynamicMin + 1)))
          : Math.max(0, Math.min(dynamicMax, typeof actualSpyCount === 'number' ? actualSpyCount : 0));

  // console.log('Range Game - Spy count:', numSpies, 'from input:', actualSpyCount, 'max allowed:', maxAllowedSpies);

        // Randomly select spy(s)
        const shuffledIndexes = Array.from({ length: resetPlayers.length }, (_, i) => i).sort(() => Math.random() - 0.5);
        const selectedSpyIndexes = shuffledIndexes.slice(0, numSpies);
        selectedSpyIndexes.forEach((idx: number) => {
          if (resetPlayers[idx]) resetPlayers[idx].isspy = true;
        });

  // console.log('Range Game - Selected spy indexes:', selectedSpyIndexes);
  // console.log('Range Game - Players with spy status:', resetPlayers.map(p => ({ name: p.name, isspy: p.isspy })));
        
        // Select a new question
        const newQuestion = getRandomQuestion(state.usedQuestionIds);
        const newUsedIds = [...state.usedQuestionIds, newQuestion.id];
        
        // If we've used too many questions, reset the used list
        const finalUsedIds = newUsedIds.length > 350 ? [newQuestion.id] : newUsedIds;
        
        set({
          players: resetPlayers,
          currentQuestion: newQuestion,
          usedQuestionIds: finalUsedIds,
          gameStarted: true,
          gamePhase: 'playing',
          currentTimer: state.timerDuration * 60,
          votes: {}
        });
      },
      
      startGameWithCustom: (customQuestions, spyCount?: number | 'random') => {
        const state = get();
        const actualSpyCount = spyCount !== undefined ? spyCount : state.numspies;
        if (state.players.length < 3) return;
        
        // Reset all players
        const resetPlayers = state.players.map(p => ({
          ...p,
          isspy: false,
          hasRevealed: false
        }));
        
        // Determine number of spies (custom questions variant) using global min/max.
        const { minSpies: rMin, maxSpies: rMax } = useSettingsStore.getState();
        const dynamicMax2 = Math.max(0, Math.min(rMax, resetPlayers.length, 15));
        const dynamicMin2 = Math.max(0, Math.min(rMin, dynamicMax2));
        const numSpies2 = actualSpyCount === 'random'
          ? (dynamicMin2 + Math.floor(Math.random() * (dynamicMax2 - dynamicMin2 + 1)))
          : Math.max(0, Math.min(dynamicMax2, typeof actualSpyCount === 'number' ? actualSpyCount : 0));

        // Randomly select spy(s)
        const shuffledIndexes = Array.from({ length: resetPlayers.length }, (_, i) => i).sort(() => Math.random() - 0.5);
        const selectedSpyIndexes2 = shuffledIndexes.slice(0, numSpies2);
        selectedSpyIndexes2.forEach((idx: number) => {
          if (resetPlayers[idx]) resetPlayers[idx].isspy = true;
        });
        
        // Select a new question using custom questions
        get().selectNewQuestionWithCustom(customQuestions);
        
        set({
          players: resetPlayers,
          gameStarted: true,
          gamePhase: 'playing',
          currentTimer: state.timerDuration * 60,
          votes: {}
        });
      },
      
      nextPhase: () => {
        const state = get();
        const phases: RangeGameState['gamePhase'][] = ['setup', 'playing', 'discussion', 'voting', 'results'];
        const currentIndex = phases.indexOf(state.gamePhase);
        const nextIndex = (currentIndex + 1) % phases.length;
        
        set({ gamePhase: phases[nextIndex] });
        
        // If moving to results, increment games played
        if (phases[nextIndex] === 'results') {
          get().incrementGamesPlayed();
        }
      },
      
      endGame: () => {
        set({
          gameStarted: false,
          gamePhase: 'setup',
          currentTimer: 0,
          votes: {}
        });
      },
      
      resetGame: () => {
        // Preserve players when resetting game state so cancelling a start preserves entered players.
        set({
          currentQuestion: null,
          gameStarted: false,
          gamePhase: 'setup',
          currentTimer: 0,
          votes: {}
        });
      },
      
      // Question management
      selectNewQuestion: () => {
        const state = get();
        
        // Get all available questions (default + custom)
        let allQuestions = [...rangeQuestions];
        
        // Add custom questions from range topics store
        // Note: This would require accessing the other store, which we'll handle in the component
        
        let availableQuestions = allQuestions;
        
        // Filter by category if not random
        if (state.selectedCategory !== 'random') {
          availableQuestions = allQuestions.filter((q: RangeQuestion) => q.category === state.selectedCategory);
        }
        
        // Filter out used questions
        const unusedQuestions = availableQuestions.filter((q: RangeQuestion) => !state.usedQuestionIds.includes(q.id));
        
        let newQuestion: RangeQuestion;
        if (unusedQuestions.length === 0) {
          // If all questions in category used, reset and use any from category
          newQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
          set({ usedQuestionIds: [newQuestion.id] }); // Reset used questions
        } else {
          newQuestion = unusedQuestions[Math.floor(Math.random() * unusedQuestions.length)];
          const newUsedIds = [...state.usedQuestionIds, newQuestion.id];
          set({ 
            currentQuestion: newQuestion,
            usedQuestionIds: newUsedIds 
          });
          return;
        }
        
        set({ currentQuestion: newQuestion });
      },
      
      selectNewQuestionWithCustom: (customQuestions) => {
        const state = get();
        
        // Combine default and custom questions
        let allQuestions = [...rangeQuestions, ...customQuestions];
        
        let availableQuestions = allQuestions;
        
        // Filter by category if not random
        if (state.selectedCategory !== 'random') {
          availableQuestions = allQuestions.filter((q: RangeQuestion) => q.category === state.selectedCategory);
        }
        
        // Filter out used questions
        const unusedQuestions = availableQuestions.filter((q: RangeQuestion) => !state.usedQuestionIds.includes(q.id));
        
        let newQuestion: RangeQuestion;
        if (unusedQuestions.length === 0) {
          // If all questions in category used, reset and use any from category
          if (availableQuestions.length === 0) {
            // Fallback to all questions if no questions in category
            availableQuestions = allQuestions;
          }
          newQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
          set({ usedQuestionIds: [newQuestion.id] }); // Reset used questions
        } else {
          newQuestion = unusedQuestions[Math.floor(Math.random() * unusedQuestions.length)];
          const newUsedIds = [...state.usedQuestionIds, newQuestion.id];
          set({ 
            currentQuestion: newQuestion,
            usedQuestionIds: newUsedIds 
          });
          return;
        }
        
        set({ currentQuestion: newQuestion });
      },
      
      // Voting
      addVote: (voterId, targetId) => {
        set(state => ({
          votes: { ...state.votes, [voterId]: targetId }
        }));
      },
      
      clearVotes: () => {
        set({ votes: {} });
      },

      setNumspies: (n) => {
        set({ numspies: n });
      },
      
      // Stats
      incrementGamesPlayed: () => {
        set(state => ({ gamesPlayed: state.gamesPlayed + 1 }));
      },
      
      incrementCorrectGuesses: () => {
        set(state => ({ correctGuesses: state.correctGuesses + 1 }));
      },
    }),
    {
      name: 'range-game-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
