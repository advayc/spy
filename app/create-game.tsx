import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput, Alert } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, Plus, Trash2, Play, Clock, List, Shuffle } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useGameStore } from '@/stores/game-store';
import { useCategoriesStore } from '@/stores/categories-store';
import { useSettingsStore } from '@/stores/settings-store';

export default function CreateGameScreen() {
  const { colorScheme, rolesEnabled } = useSettingsStore();
  const { 
    players, 
    timerDuration, 
    selectedCategory, 
    addPlayer, 
    removePlayer, 
    updatePlayer, 
    setTimerDuration, 
    setSelectedCategory,
    startGame 
  } = useGameStore();

  const [newPlayerName, setNewPlayerName] = useState('');

  const { getAllCategories } = useCategoriesStore();
  const categories = [
    ...getAllCategories().map(c => ({ id: c.id, name: c.name, icon: c.icon })),
    { id: 'random', name: 'Random Mix', icon: '🎲' },
  ];

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
    }
  };

  const handleStartGame = () => {
    if (players.length < 3) {
      Alert.alert('Not Enough Players', 'You need at least 3 players to start the game.');
      return;
    }
    startGame();
    router.push('/game');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Game</Text>
        <TouchableOpacity onPress={() => router.push('/topics')} style={styles.topicsButton}>
          <List size={24} color="#007AFF" />
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
              <Plus size={20} color={!newPlayerName.trim() || players.length >= 15 ? "#666666" : "#007AFF"} />
            </TouchableOpacity>
          </View>

          <View style={styles.playersGrid}>
            {players.map((player, idx) => (
              <View key={player.id} style={styles.playerRow}>
                <TextInput
                  style={styles.playerNameInput}
                  value={player.name}
                  onChangeText={name => updatePlayer(player.id, name)}
                  placeholder={`Player ${idx + 1}`}
                  placeholderTextColor="#888"
                  maxLength={16}
                />
                <TouchableOpacity onPress={() => removePlayer(player.id)} style={styles.removePlayerButton}>
                  <Text style={styles.removePlayerText}>Remove</Text>
                </TouchableOpacity>
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
                  timerDuration === option.value && styles.timerOptionSelected
                ]}
                onPress={() => setTimerDuration(option.value)}
              >
                <Text style={[
                  styles.timerOptionText,
                  timerDuration === option.value && styles.timerOptionTextSelected
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
                  selectedCategory === category.id && styles.categoryCardSelected
                ]}
                onPress={() => setSelectedCategory(category.id)}
              >
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={[
                  styles.categoryName,
                  selectedCategory === category.id && styles.categoryNameSelected
                ]}>
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Start Game Button */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={[styles.startButton, players.length < 3 && styles.startButtonDisabled]}
          onPress={handleStartGame}
          disabled={players.length < 3}
        >
          <LinearGradient
            colors={players.length >= 3 ? ['#007AFF', '#0056CC'] : ['#333333', '#222222']}
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
  },
  playerCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    backgroundColor: '#007AFF',
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
  },
  removeButton: {
    padding: 8,
  },
  timerOptions: {
    flexDirection: 'row',
    gap: 12,
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
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  playerNameInput: {
    flex: 1,
    backgroundColor: '#222',
    color: 'white',
    fontSize: 18,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
  },
  removePlayerButton: {
    backgroundColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  removePlayerText: {
    color: '#ff6666',
    fontSize: 16,
  },
  addPlayerButton: {
    backgroundColor: '#444',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  addPlayerText: {
    color: '#66ff99',
    fontSize: 18,
  },
});