import { create } from 'zustand';
import { useTopicsStore } from './topics-store';
import { useCategoriesStore } from './categories-store';
import { useSettingsStore } from './settings-store';

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
  playerRoles: Record<string, { role: string; isSpy: boolean; customWord?: string }>;
  spyId: string | null;
}

interface GameStore {
  players: Player[];
  timerDuration: number;
  selectedCategory: string;
  numspies: number | 'random';
  gameState: GameState;
  
  addPlayer: (name: string) => void;
  removePlayer: (id: string) => void;
  updatePlayer: (id: string, name: string) => void;
  setTimerDuration: (duration: number) => void;
  setSelectedCategory: (category: string) => void;
  setNumspies: (num: number | 'random') => void;
  startGame: (spyCount?: number | 'random') => void;
  resetGame: () => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  players: [],
  timerDuration: 8,
  selectedCategory: 'locations',
  numspies: 1,
  gameState: {
    currentTopic: null,
    playerRoles: {},
    spyId: null,
  },
  setNumspies: (num) => {
    set({ numspies: num });
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


  startGame: (spyCount?: number | 'random') => {
    const { players, selectedCategory, numspies } = get();
    const actualSpyCount = spyCount !== undefined ? spyCount : numspies;
    const { topics } = useTopicsStore.getState();
    const { getCategory } = useCategoriesStore.getState();
    const { rolesEnabled } = useSettingsStore.getState();
    
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
    
    // Determine number of spies. Random uses global min/max settings and clamps to player count - 1.
    const { minSpies, maxSpies } = useSettingsStore.getState();
    const dynamicMax = Math.max(0, Math.min(maxSpies, players.length - 1, 15));
    const dynamicMin = Math.max(0, Math.min(minSpies, dynamicMax));
    let finalSpyCount: number;
    if (actualSpyCount === 'random') {
      // inclusive range [dynamicMin, dynamicMax]
      const span = dynamicMax - dynamicMin + 1;
      finalSpyCount = dynamicMin + Math.floor(Math.random() * span);
    } else {
      finalSpyCount = Math.min(dynamicMax, Math.max(0, typeof actualSpyCount === 'number' ? actualSpyCount : 0));
    }

  // console.log('Regular Game - Spy count:', finalSpyCount, 'from input:', actualSpyCount, 'max allowed:', maxAllowedSpies);
    
    // Select random spies
    const shuffled = [...players].sort(() => Math.random() - 0.5);
    const spyIds = shuffled.slice(0, finalSpyCount).map(p => p.id);

    // console.log('Regular Game - Selected spy IDs:', spyIds);
    
    // Determine if this category uses roles and if roles are globally enabled
    const catMeta = selectedCategory === 'random' ? undefined : getCategory(selectedCategory);
    const usesRoles = rolesEnabled && (catMeta ? catMeta.useRoles : true);

    // Assign roles to players
    const playerRoles: Record<string, { role: string; isSpy: boolean; customWord?: string }> = {};
    players.forEach((player) => {
      if (spyIds.includes(player.id)) {
        // Spies should never receive a word. Keep isSpy true; role label depends on usesRoles.
        playerRoles[player.id] = { role: usesRoles ? 'spy' : 'Participant', isSpy: true };
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
        spyId: spyIds.length === 1 ? spyIds[0] : null,
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
