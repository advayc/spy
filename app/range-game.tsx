import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput, Alert } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, Plus, Trash2, Play, Clock, Edit2, Target, Shuffle } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRangeGameStore } from '@/stores/range-game-store';
import { useRangeTopicsStore } from '@/stores/range-topics-store';
import { useTheme } from '@/hooks/useTheme';
import { useVibration } from '@/hooks/useVibration';
import { getQuestionCategories } from '@/data/range-questions';

export default function RangeGameScreen() {
  const { colors } = useTheme();
  const vibrate = useVibration();
  const { getAllCategories: getCustomCategories } = useRangeTopicsStore();
  const { 
    players, 
    timerDuration, 
    selectedCategory,
    setSelectedCategory,
    addPlayer, 
    removePlayer, 
    setTimerDuration,
    startGame,
    gameStarted,
    currentQuestion
  } = useRangeGameStore();

  const [newPlayerName, setNewPlayerName] = useState('');
  const [editingPlayer, setEditingPlayer] = useState<string | null>(null);
  const [editPlayerName, setEditPlayerName] = useState('');

  // Get range question categories and add random option
  const defaultCategories = getQuestionCategories().map(cat => ({ 
    id: cat, 
    name: cat,
    icon: getCategoryIcon(cat),
    isCustom: false
  }));
  
  const customCategories = getCustomCategories().map(cat => ({ 
    id: cat.id, 
    name: cat.name,
    icon: cat.icon,
    isCustom: true
  }));
  
  const categories = [
    ...defaultCategories,
    ...customCategories,
    { id: 'random', name: 'Random Mix', icon: '🎲', isCustom: false },
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
      // Find the player and update
      const player = players.find(p => p.id === editingPlayer);
      if (player) {
        // Remove and re-add with new name (simple approach)
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
    if (players.length > 15) {
      vibrate.error();
      Alert.alert('Too Many Players', 'Maximum 15 players allowed.');
      return;
    }
    
    startGame();
    vibrate.success();
    router.push('/range-play');
  };

  // Redirect if game already started
  if (gameStarted && currentQuestion) {
    router.push('/range-play');
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={24} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Range Game</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Info Card */}
        <View style={[styles.infoCard, { backgroundColor: colors.surface }]}>
          <View style={styles.infoHeader}>
            <Target size={20} color={colors.primary} />
            <Text style={[styles.infoTitle, { color: colors.text }]}>How to Play Range Game</Text>
          </View>
          <Text style={[styles.infoText, { color: colors.textSecondary }]}>
            Everyone gets the same question except one player who gets a range. Try to figure out who has the range!
          </Text>
          <Text style={[styles.exampleText, { color: colors.textSecondary }]}>
            Example: "Age you learned to drive" vs "Range: 10-25"
          </Text>
        </View>

        {/* Players Section */}
        <View style={[styles.section, { backgroundColor: colors.surface }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Players ({players.length}/15)</Text>
          
          <View style={styles.addPlayerContainer}>
            <TextInput
              style={[styles.playerInput, { 
                backgroundColor: colors.background,
                borderColor: `${colors.primary}20`,
                color: colors.text
              }]}
              placeholder="Enter player name"
              placeholderTextColor={colors.textSecondary}
              value={newPlayerName}
              onChangeText={setNewPlayerName}
              onSubmitEditing={handleAddPlayer}
              maxLength={20}
            />
            <TouchableOpacity 
              onPress={handleAddPlayer}
              style={[
                styles.addButton, 
                { backgroundColor: colors.primary },
                (!newPlayerName.trim() || players.length >= 15) && styles.addButtonDisabled
              ]}
              disabled={!newPlayerName.trim() || players.length >= 15}
            >
              <Plus size={20} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.playersGrid}>
            {players.map((player) => (
              <View key={player.id} style={[styles.playerCard, { backgroundColor: colors.background, borderColor: `${colors.primary}20` }]}>
                {editingPlayer === player.id ? (
                  <View style={styles.editPlayerContainer}>
                    <TextInput
                      style={[styles.editPlayerInput, { 
                        backgroundColor: colors.surface,
                        borderColor: colors.primary,
                        color: colors.text
                      }]}
                      value={editPlayerName}
                      onChangeText={setEditPlayerName}
                      onSubmitEditing={handleSavePlayerEdit}
                      autoFocus
                    />
                    <View style={styles.editPlayerActions}>
                      <TouchableOpacity onPress={handleCancelPlayerEdit} style={styles.editActionButton}>
                        <Text style={[styles.editActionText, { color: colors.textSecondary }]}>Cancel</Text>
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
                    <Text style={[styles.playerName, { color: colors.text }]}>{player.name}</Text>
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
        <View style={[styles.section, { backgroundColor: colors.surface }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            <Clock size={20} color={colors.text} /> Game Timer
          </Text>
          <View style={styles.timerOptions}>
            {timerOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.timerOption,
                  { backgroundColor: colors.background, borderColor: `${colors.primary}20` },
                  timerDuration === option.value && { 
                    borderColor: colors.primary, 
                    backgroundColor: colors.surface 
                  }
                ]}
                onPress={() => setTimerDuration(option.value)}
              >
                <Text style={[
                  styles.timerOptionText,
                  { color: colors.text },
                  timerDuration === option.value && { color: colors.primary }
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Category Section */}
        <View style={[styles.section, { backgroundColor: colors.surface }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            <Shuffle size={20} color={colors.text} /> Question Category
          </Text>
          <View style={styles.categoriesGrid}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryCard,
                  { backgroundColor: colors.background, borderColor: `${colors.primary}20` },
                  selectedCategory === category.id && { 
                    borderColor: colors.accent, 
                    backgroundColor: colors.surface 
                  }
                ]}
                onPress={() => setSelectedCategory(category.id)}
              >
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={[
                  styles.categoryName,
                  { color: colors.text },
                  selectedCategory === category.id && { color: colors.accent }
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
            colors={players.length >= 3 ? [colors.accent, colors.primary] : ['#333333', '#222222']}
            style={styles.startButtonGradient}
          >
            <Target size={24} color="white" />
            <Text style={styles.startButtonText}>Start Range Game</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Helper function to get category icons
function getCategoryIcon(category: string): string {
  const iconMap: Record<string, string> = {
    'Life Events': '🎂',
    'Daily Life': '☕',
    'Hobbies': '🎨',
    'Health': '💊',
    'Technology': '📱',
    'Entertainment': '🎬',
    'Travel': '✈️',
    'Food': '🍕',
    'Money': '💰',
    'Relationships': '💝',
    'Work': '💼',
    'Education': '📚',
    'Sports': '⚽',
    'Music': '🎵',
    'Fashion': '👗',
    'Home': '🏠',
    'Miscellaneous': '🔮'
  };
  return iconMap[category] || '❓';
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  headerRight: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  infoCard: {
    padding: 20,
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  infoText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  exampleText: {
    fontSize: 13,
    fontStyle: 'italic',
    opacity: 0.8,
  },
  section: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  addPlayerContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  playerInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 8,
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
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
  },
  editPlayerContainer: {
    gap: 12,
  },
  editPlayerInput: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    fontSize: 16,
  },
  editPlayerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  editActionButton: {
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  editActionText: {
    fontSize: 14,
    fontWeight: '500',
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
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  playerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  playerActionButton: {
    padding: 8,
  },
  timerOptions: {
    flexDirection: 'row',
    gap: 12,
  },
  timerOption: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
  },
  timerOptionText: {
    fontSize: 14,
    fontWeight: '500',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    width: '47%',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    gap: 8,
  },
  categoryIcon: {
    fontSize: 24,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  footer: {
    padding: 20,
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
    paddingHorizontal: 32,
    gap: 12,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
