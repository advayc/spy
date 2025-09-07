import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RangeQuestion, getRandomQuestion, rangeQuestions } from '@/data/range-questions';

export interface RangePlayer {
  id: string;
  name: string;
  isOutlier: boolean; // The person who gets the range
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
  
  // Results
  votes: Record<string, string>; // playerId -> votedPlayerId
  correctGuesses: number;
  gamesPlayed: number;
  
  // Actions
  addPlayer: (name: string) => void;
  removePlayer: (id: string) => void;
  updatePlayer: (id: string, updates: Partial<RangePlayer>) => void;
  clearPlayers: () => void;
  
  setTimerDuration: (minutes: number) => void;
  setCurrentTimer: (seconds: number) => void;
  setSelectedCategory: (category: string) => void;
  
  startGame: () => void;
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
          isOutlier: false,
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
        set({ players: [] });
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
      startGame: () => {
        const state = get();
        if (state.players.length < 3) return;
        
        // Reset all players
        const resetPlayers = state.players.map(p => ({
          ...p,
          isOutlier: false,
          hasRevealed: false
        }));
        
        // Randomly select one player to be the outlier
        const outlierIndex = Math.floor(Math.random() * resetPlayers.length);
        resetPlayers[outlierIndex].isOutlier = true;
        
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
        set({
          players: [],
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
      
      // Voting
      addVote: (voterId, targetId) => {
        set(state => ({
          votes: { ...state.votes, [voterId]: targetId }
        }));
      },
      
      clearVotes: () => {
        set({ votes: {} });
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
