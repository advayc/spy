import { create } from 'zustand';
import { useTopicsStore } from './topics-store';
import { useCategoriesStore } from './categories-store';

export interface Player {
  id: string;
  name: string;
}

export interface GameState {
  currentTopic: {
    id: string;
    name: string;
    category: string;
    roles: string[];
  } | null;
  playerRoles: Record<string, { role: string; isSpy: boolean }>;
  spyId: string | null;
}

interface GameStore {
  players: Player[];
  timerDuration: number;
  selectedCategory: string;
  gameState: GameState;
  
  addPlayer: (name: string) => void;
  removePlayer: (id: string) => void;
  updatePlayer: (id: string, name: string) => void;
  setTimerDuration: (duration: number) => void;
  setSelectedCategory: (category: string) => void;
  startGame: () => void;
  resetGame: () => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  players: [],
  timerDuration: 8,
  selectedCategory: 'locations',
  gameState: {
    currentTopic: null,
    playerRoles: {},
    spyId: null,
  },

  addPlayer: (name: string) => {
    const newPlayer: Player = {
      id: Date.now().toString(),
      name,
    };
    set((state) => ({
      players: [...state.players, newPlayer],
    }));
  },

  removePlayer: (id: string) => {
    set((state) => ({
      players: state.players.filter((player) => player.id !== id),
    }));
  },

  updatePlayer: (id: string, name: string) => {
    set((state) => ({
      players: state.players.map((player) =>
        player.id === id ? { ...player, name } : player
      ),
    }));
  },

  setTimerDuration: (duration: number) => {
    set({ timerDuration: duration });
  },

  setSelectedCategory: (category: string) => {
    set({ selectedCategory: category });
  },

  startGame: () => {
    const { players, selectedCategory } = get();
    const { topics } = useTopicsStore.getState();
  const { getCategory } = useCategoriesStore.getState();
    
    // Get topics for selected category or all topics if random
    let availableTopics = topics;
    if (selectedCategory !== 'random') {
      availableTopics = topics.filter(topic => topic.category === selectedCategory);
    }
    
    if (availableTopics.length === 0) {
      console.error('No topics available for category:', selectedCategory);
      return;
    }

    // Select random topic
    const randomTopic = availableTopics[Math.floor(Math.random() * availableTopics.length)];
    
    // Select random spy
    const spyIndex = Math.floor(Math.random() * players.length);
    const spyId = players[spyIndex].id;
    
    // Determine if this category uses roles
    const catMeta = selectedCategory === 'random' ? undefined : getCategory(selectedCategory);
    const usesRoles = catMeta ? catMeta.useRoles : true;

    // Assign roles to players
    const playerRoles: Record<string, { role: string; isSpy: boolean }> = {};
    
    players.forEach((player, index) => {
      if (player.id === spyId) {
        playerRoles[player.id] = { role: 'Spy', isSpy: true };
      } else {
        if (usesRoles && randomTopic.roles.length > 0) {
          // Assign random role from topic
          const randomRole = randomTopic.roles[Math.floor(Math.random() * randomTopic.roles.length)];
          playerRoles[player.id] = { role: randomRole, isSpy: false };
        } else {
          // No roles; generic participant
          playerRoles[player.id] = { role: 'Participant', isSpy: false };
        }
      }
    });

    set({
      gameState: {
        currentTopic: randomTopic,
        playerRoles,
        spyId,
      },
    });
  },

  resetGame: () => {
    set({
      gameState: {
        currentTopic: null,
        playerRoles: {},
        spyId: null,
      },
    });
  },
}));