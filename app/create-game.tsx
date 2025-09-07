import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput, Alert, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, Plus, Trash2, Play, Clock, List, Shuffle, Edit2 } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useGameStore } from '@/stores/game-store';
import { useCategoriesStore } from '@/stores/categories-store';
import { useTheme } from '@/hooks/useTheme';
import { useVibration } from '@/hooks/useVibration';

export default function CreateGameScreen() {
  const { colors } = useTheme();
  const vibrate = useVibration();
  const { 
    players, 
    timerDuration, 
    selectedCategory, 
    setSelectedCategory,
    addPlayer, 
    removePlayer, 
    updatePlayer, 
    setTimerDuration, 
    startGame,
    setNumspies,
  } = useGameStore();
  
  // Get screen width for responsive layout
  const screenWidth = Dimensions.get('window').width;
  const isSmallScreen = screenWidth < 390; // iPhone SE and smaller
  
  const spyOptions: { value: number | 'random'; label: string }[] = [
  // include 0 and cap options to 8
  ...[0,1,2,3,4,5,6,7,8].filter(n => n < players.length && n <= 8).map(n => ({ value: n, label: `${n} ${n === 1 ? 'Spy' : 'Spies'}` })),
    { value: 'random', label: 'Random' }
  ];

  const [newPlayerName, setNewPlayerName] = useState('');
  const [editingPlayer, setEditingPlayer] = useState<string | null>(null);
  const [editPlayerName, setEditPlayerName] = useState('');

  const { getAllCategories } = useCategoriesStore();
  const categories = [
    ...getAllCategories().map(c => ({ id: c.id, name: c.name, icon: c.icon })),
    { id: 'random', name: 'Random Mix', icon: '🎲' },
  ];

  const [localNumspies, setLocalNumspies] = useState<number | 'random'>(1);

  const timerOptions = [
    { value: 5, label: '5 min' },
    { value: 8, label: '8 min' },
    { value: 10, label: '10 min' },
    { value: 15, label: '15 min' },
  ];

  const handleAddPlayer = () => {
    if (newPlayerName.trim() && players.length < 15) {
      addPlayer(newPlayerName.trim());
      setNewPlayerName('');
      vibrate.light();
    }
  };

  const handleRemovePlayer = (playerId: string) => {
    removePlayer(playerId);
    vibrate.medium();
  };

  const handleEditPlayer = (playerId: string) => {
    const player = players.find(p => p.id === playerId);
    if (player) {
      setEditingPlayer(playerId);
      setEditPlayerName(player.name);
    }
  };

  const handleSavePlayerEdit = () => {
    if (editingPlayer && editPlayerName.trim()) {
      // Simple approach: remove and re-add with new name
      const player = players.find(p => p.id === editingPlayer);
      if (player) {
        removePlayer(editingPlayer);
        addPlayer(editPlayerName.trim());
      }
      setEditingPlayer(null);
      setEditPlayerName('');
      vibrate.light();
    }
  };

  const handleCancelPlayerEdit = () => {
    setEditingPlayer(null);
    setEditPlayerName('');
  };

  const handleStartGame = () => {
    if (players.length < 3) {
      vibrate.error();
      Alert.alert('Not Enough Players', 'You need at least 3 players to start the game.');
      return;
    }
    // Pass the spy count directly to startGame
    console.log('Create Game - Starting with spy count:', localNumspies);
    startGame(localNumspies);
    vibrate.success();
    router.push('/game');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={24} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Game</Text>
        <TouchableOpacity onPress={() => router.push('/topics')} style={styles.topicsButton}>
          <List size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
  {/* Players Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Players ({players.length}/15)</Text>
          
          <View style={styles.addPlayerContainer}>
            <TextInput
              style={styles.playerInput}
              placeholder="Enter player name"
              placeholderTextColor="#666666"
              value={newPlayerName}
              onChangeText={setNewPlayerName}
              onSubmitEditing={handleAddPlayer}
              maxLength={20}
            />
            <TouchableOpacity 
              onPress={handleAddPlayer}
              style={[styles.addButton, !newPlayerName.trim() && styles.addButtonDisabled]}
              disabled={!newPlayerName.trim() || players.length >= 15}
            >
              <Plus size={20} color={!newPlayerName.trim() || players.length >= 15 ? "#666666" : colors.primary} />
            </TouchableOpacity>
          </View>

          <View style={styles.playersGrid}>
            {players.map((player) => (
              <View key={player.id} style={styles.playerCard}>
                {editingPlayer === player.id ? (
                  <View style={styles.editPlayerContainer}>
                    <TextInput
                      style={styles.editPlayerInput}
                      value={editPlayerName}
                      onChangeText={setEditPlayerName}
                      onSubmitEditing={handleSavePlayerEdit}
                      autoFocus
                    />
                    <View style={styles.editPlayerActions}>
                      <TouchableOpacity onPress={handleCancelPlayerEdit} style={styles.editActionButton}>
                        <Text style={styles.editActionText}>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={handleSavePlayerEdit} style={[styles.editActionButton, { backgroundColor: colors.primary }]}>
                        <Text style={[styles.editActionText, { color: 'white' }]}>Save</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : (
                  <View style={styles.playerInfo}>
                    <View style={[styles.playerAvatar, { backgroundColor: colors.primary }]}>
                      <Text style={styles.playerInitial}>
                        {player.name.charAt(0).toUpperCase()}
                      </Text>
                    </View>
                    <Text style={styles.playerName}>{player.name}</Text>
                    <View style={styles.playerActions}>
                      <TouchableOpacity 
                        onPress={() => handleEditPlayer(player.id)}
                        style={styles.playerActionButton}
                      >
                        <Edit2 size={16} color={colors.primary} />
                      </TouchableOpacity>
                      <TouchableOpacity 
                        onPress={() => handleRemovePlayer(player.id)}
                        style={styles.playerActionButton}
                      >
                        <Trash2 size={16} color="#FF3B30" />
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Timer Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Clock size={20} color="white" /> Game Timer
          </Text>
          <View style={styles.timerOptions}>
            {timerOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.timerOption,
                  timerDuration === option.value && { ...styles.timerOptionSelected, borderColor: colors.primary, backgroundColor: colors.surface }
                ]}
                onPress={() => setTimerDuration(option.value)}
              >
                <Text style={[
                  styles.timerOptionText,
                  timerDuration === option.value && { ...styles.timerOptionTextSelected, color: colors.primary }
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* spy Selector Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Number of spies</Text>
          <View style={[styles.spyOptionsWrap, isSmallScreen && styles.spyOptionsWrapSmall]}>
            {spyOptions.map((option) => (
              <TouchableOpacity
                key={String(option.value)}
                style={[
                  styles.spyOption,
                  isSmallScreen && styles.spyOptionSmall,
                  localNumspies === option.value && { ...styles.spyOptionSelected, borderColor: colors.error, backgroundColor: colors.surface }
                ]}
                onPress={() => setLocalNumspies(option.value)}
              >
                <Text style={[
                  styles.spyOptionText,
                  localNumspies === option.value && { ...styles.spyOptionTextSelected, color: colors.error }
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Category Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Shuffle size={20} color="white" /> Topic Category
          </Text>
          <View style={styles.categoriesGrid}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryCard,
                  selectedCategory === category.id && { ...styles.categoryCardSelected, borderColor: colors.primary, backgroundColor: colors.surface }
                ]}
                onPress={() => setSelectedCategory(category.id)}
              >
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={[
                  styles.categoryName,
                  selectedCategory === category.id && { ...styles.categoryNameSelected, color: colors.primary }
                ]}>
                  {category?.name ?? 'Unknown'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

  {/* Spy Mode removed */}
      </ScrollView>

      {/* Start Game Button */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={[styles.startButton, players.length < 3 && styles.startButtonDisabled]}
          onPress={handleStartGame}
          disabled={players.length < 3}
        >
          <LinearGradient
            colors={players.length >= 3 ? [colors.primary, colors.secondary || '#5AC8FA'] : ['#333333', '#222222']}
            style={styles.startButtonGradient}
          >
            <Play size={24} color="white" />
            <Text style={styles.startButtonText}>Start Game</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  topicsButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  addPlayerContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  playerInput: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: 'white',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonDisabled: {
    opacity: 0.5,
  },
  playersGrid: {
  gap: 12,
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  },
  playerCard: {
  backgroundColor: '#1a1a1a',
  borderRadius: 12,
  padding: 12,
  width: '100%',
  marginBottom: 12,
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  playerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerInitial: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  playerName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  playerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  playerActionButton: {
    padding: 8,
  },
  editPlayerContainer: {
    gap: 12,
  },
  editPlayerInput: {
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    padding: 12,
    color: 'white',
    fontSize: 16,
  },
  editPlayerActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  editActionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#2a2a2a',
  },
  editActionText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  timerOptions: {
    flexDirection: 'row',
    gap: 12,
  },
  spyOptionsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'space-between',
  },
  spyOptionsWrapSmall: {
    justifyContent: 'space-around',
  },
  spyOption: {
    width: '30%',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 12,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    marginBottom: 8,
  },
  spyOptionSmall: {
    width: '22%',
  },
  spyOptionSelected: {
    backgroundColor: '#001a33',
  },
  spyOptionText: {
    color: '#666666',
    fontSize: 14,
    fontWeight: '500',
  },
  spyOptionTextSelected: {
    color: '#FF3B30',
    fontWeight: '600',
  },
  timerOption: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  timerOptionSelected: {
    borderColor: '#007AFF',
    backgroundColor: '#001a33',
  },
  timerOptionText: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '500',
  },
  timerOptionTextSelected: {
    color: '#007AFF',
    fontWeight: '600',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  categoryCardSelected: {
    borderColor: '#007AFF',
    backgroundColor: '#001a33',
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryName: {
    color: '#666666',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  categoryNameSelected: {
    color: '#007AFF',
    fontWeight: '600',
  },
  footer: {
    padding: 20,
    paddingBottom: 34,
  },
  startButton: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  startButtonDisabled: {
    opacity: 0.5,
  },
  startButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    gap: 12,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
