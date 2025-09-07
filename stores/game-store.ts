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
  numImposters: number | 'random';
    spyMode: 'normal' | 'role';
  gameState: GameState;
  
  addPlayer: (name: string) => void;
  removePlayer: (id: string) => void;
  updatePlayer: (id: string, name: string) => void;
  setTimerDuration: (duration: number) => void;
  setSelectedCategory: (category: string) => void;
  setNumImposters: (num: number | 'random') => void;
    setSpyMode: (mode: 'normal' | 'role') => void;
  startGame: () => void;
  resetGame: () => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  players: [],
  timerDuration: 8,
  selectedCategory: 'locations',
  numImposters: 1,
    spyMode: 'normal',
  gameState: {
    currentTopic: null,
    playerRoles: {},
    spyId: null,
  },
  setNumImposters: (num) => {
    set({ numImposters: num });
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

    setSpyMode: (mode: 'normal' | 'role') => {
      set({ spyMode: mode });
    },

  startGame: () => {
  const { players, selectedCategory, numImposters, spyMode } = get();
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
    
    // Determine number of imposters
    let imposterCount = numImposters === 'random'
      ? Math.max(1, Math.floor(Math.random() * Math.max(1, players.length - 1)))
      : Math.min(players.length - 1, typeof numImposters === 'number' ? numImposters : 1);
    // Select random imposters
    const shuffled = [...players].sort(() => Math.random() - 0.5);
    const imposterIds = shuffled.slice(0, imposterCount).map(p => p.id);
    
    // Determine if this category uses roles and if roles are globally enabled
    const catMeta = selectedCategory === 'random' ? undefined : getCategory(selectedCategory);
    const usesRoles = rolesEnabled && (catMeta ? catMeta.useRoles : true);

    // Assign roles to players
    const playerRoles: Record<string, { role: string; isSpy: boolean; customWord?: string }> = {};
    players.forEach((player) => {
      if (imposterIds.includes(player.id)) {
        let customWord: string | undefined = undefined;
        
  // If spy mode is 'role', get a different role from the same topic
  if (spyMode === 'role' && usesRoles && randomTopic.roles.length > 1) {
          // Get roles from same topic excluding roles that might be assigned to other players
          const availableRoles = [...randomTopic.roles];
          
          // Try to find a role that's not already assigned to non-spy players
          const assignedRoles = Object.values(playerRoles)
            .filter(p => !p.isSpy)
            .map(p => p.role);
          
          const unassignedRoles = availableRoles.filter(role => !assignedRoles.includes(role));
          
          if (unassignedRoles.length > 0) {
            // Use an unassigned role if available
            customWord = unassignedRoles[Math.floor(Math.random() * unassignedRoles.length)];
          } else {
            // Fallback to any random role from the topic
            customWord = availableRoles[Math.floor(Math.random() * availableRoles.length)];
          }
        }
        
        playerRoles[player.id] = { role: 'Imposter', isSpy: true, customWord };
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
        spyId: imposterIds.length === 1 ? imposterIds[0] : null,
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
