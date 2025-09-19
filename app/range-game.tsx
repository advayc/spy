import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput, Alert, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, Plus, Trash2, Play, Clock, Edit2, Target, Shuffle, List, Save, ChevronDown, ChevronUp, Users, BookOpen, Star, Check } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRangeGameStore } from '@/stores/range-game-store';
import { useSettingsStore } from '@/stores/settings-store';
import { usePlayerPresetsStore } from '@/stores/player-presets-store';
import { useRangeTopicsStore } from '@/stores/range-topics-store';
import { useTheme } from '@/hooks/useTheme';
import { useVibration } from '@/hooks/useVibration';
import { getQuestionCategories } from '@/data/range-questions';

export default function RangeGameScreen() {
  const { colors } = useTheme();
  const vibrate = useVibration();
  const { getAllCategories: getCustomCategories, customQuestions } = useRangeTopicsStore();
  const { 
    players, 
    timerDuration, 
    selectedCategory,
    numspies,
    setSelectedCategory,
    addPlayer, 
    removePlayer, 
    setPlayers,
    setTimerDuration,
    setNumspies,
    startGameWithCustom,
    gameStarted,
    currentQuestion
  } = useRangeGameStore();

  const [newPlayerName, setNewPlayerName] = useState('');
  const [editingPlayer, setEditingPlayer] = useState<string | null>(null);
  const [editPlayerName, setEditPlayerName] = useState('');
  
  // Preset states
  const [showPresets, setShowPresets] = useState(false);
  const [newPresetName, setNewPresetName] = useState('');
  const [showSavePreset, setShowSavePreset] = useState(false);

  // Get screen width for responsive layout
  const screenWidth = Dimensions.get('window').width;
  const isSmallScreen = screenWidth < 390; // iPhone SE and smaller


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

  const { minSpies, maxSpies, playerPresetsEnabled } = useSettingsStore();
  const { presets, addPreset, deletePreset } = usePlayerPresetsStore();
  const spyOptions = React.useMemo(() => {
    const maxAllowed = Math.min(15, maxSpies, players.length);
    const minAllowed = Math.max(0, Math.min(minSpies, maxAllowed));
    return [
      ...Array.from({ length: maxAllowed - minAllowed + 1 }, (_, i) => i + minAllowed)
        .map(n => ({ value: n, label: `${n} ${n === 1 ? 'Spy' : 'Spies'}` })),
      { value: 'random', label: `Random` }
    ];
  }, [players.length, minSpies, maxSpies]);

  // Remove local state - use store state instead

  // Determine how many spy option tiles to show per row based on screen width.
  // Aim: ~4 on wider phones (e.g., iPhone XR ~414), ~3 on medium (iPhone 16 ~390), fewer on small screens.
  const itemsPerRow = screenWidth >= 414 ? 4 : screenWidth >= 390 ? 3 : 2;
  // Calculate pixel width for each option so we can reliably set numeric width (TypeScript friendly)
  // Reserve horizontal padding present in container (20*2) and an approximation of gaps/margins.
  const containerHorizontalPadding = 40; // content paddingHorizontal: 20 on styles.content
  const approxGapPerItem = 12; // approximation for gap + margin per item
  const optionWidth = Math.floor((screenWidth - containerHorizontalPadding - (approxGapPerItem * itemsPerRow)) / itemsPerRow);

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

  const handleLoadPreset = (presetId: string) => {
    const preset = presets.find(p => p.id === presetId);
    if (preset) {
      setPlayers(preset.players);
      setShowPresets(false);
      vibrate.light();
    }
  };

  // Helper function to check if current players match a preset
  const getSelectedPresetId = () => {
    if (players.length === 0) return null;

    for (const preset of presets) {
      if (preset.players.length !== players.length) continue;

      // Check if all players in the preset match current players (by name)
      const presetNames = preset.players.map(p => p.name).sort();
      const currentNames = players.map(p => p.name).sort();

      if (presetNames.length === currentNames.length &&
          presetNames.every((name, index) => name === currentNames[index])) {
        return preset.id;
      }
    }
    return null;
  };

  const handleSavePreset = () => {
    if (newPresetName.trim() && players.length > 0) {
      addPreset(newPresetName.trim(), players.map(p => ({ id: p.id, name: p.name })));
      setNewPresetName('');
      setShowSavePreset(false);
      vibrate.success();
    }
  };

  const handleDeletePreset = (presetId: string) => {
    Alert.alert(
      'Delete Preset',
      'Are you sure you want to delete this preset?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: () => {
            deletePreset(presetId);
            vibrate.medium();
          }
        }
      ]
    );
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
    
    // Convert custom questions to base format
    const convertedCustomQuestions = customQuestions.map(q => ({
      id: q.id,
      category: q.category,
      prompt: q.prompt,
      rangePrompt: q.rangePrompt,
    }));
    
    // Pass the spy count directly to startGameWithCustom
  // console.log('Range Game - Starting with spy count:', localNumspies);
    // Recalculate min/max for current player count
    const maxAllowed = Math.min(15, maxSpies, players.length);
    const minAllowed = Math.max(0, Math.min(minSpies, maxAllowed));
    const chosen = numspies === 'random'
      ? 'random'
      : Math.min(maxAllowed, Math.max(minAllowed, numspies));
    startGameWithCustom(convertedCustomQuestions, chosen);
    vibrate.success();
    router.push('/range-play');
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={24} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Range Game</Text>
        <TouchableOpacity onPress={() => router.push('/topics')} style={styles.topicsButton}>
          <List size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Info Card */}
        <View style={styles.infoCard}>
          <View style={styles.infoHeader}>
            <Target size={20} color={colors.primary} />
            <Text style={styles.infoTitle}>How to Play Range Game</Text>
          </View>
          <Text style={styles.infoText}>Everyone gets the same question except one player who gets a range. Try to figure out who has the range!</Text>
          <Text style={styles.exampleText}>Example: Age you learned to drive vs Range: 10-25</Text>
        </View>

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
              style={[styles.addButton, (!newPlayerName.trim() || players.length >= 15) && styles.addButtonDisabled]}
              disabled={!newPlayerName.trim() || players.length >= 15}
            >
              <Plus size={20} color={newPlayerName.trim() && players.length < 15 ? colors.primary : "#666666"} />
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

          {/* Player Presets */}
          {playerPresetsEnabled && (
            <View style={styles.presetsContainer}>
              <View style={styles.presetsHeader}>
                <TouchableOpacity 
                  onPress={() => setShowPresets(!showPresets)}
                  style={styles.presetsToggle}
                >
                  <BookOpen size={18} color={colors.primary} />
                  <Text style={styles.presetsTitle}>Player Presets</Text>
                  {showPresets ? <ChevronUp size={18} color={colors.primary} /> : <ChevronDown size={18} color={colors.primary} />}
                </TouchableOpacity>
                {players.length > 0 && (
                  <TouchableOpacity 
                    onPress={() => setShowSavePreset(!showSavePreset)}
                    style={[styles.savePresetButton, { backgroundColor: showSavePreset ? colors.primary + '20' : '#2a2a2a' }]}
                  >
                    <Save size={14} color={colors.primary} />
                    <Text style={[styles.savePresetText, { color: colors.primary }]}>Save</Text>
                  </TouchableOpacity>
                )}
              </View>

              {showSavePreset && (
                <View style={styles.savePresetContainer}>
                  <TextInput
                    style={styles.presetNameInput}
                    placeholder="Preset name"
                    placeholderTextColor="#666666"
                    value={newPresetName}
                    onChangeText={setNewPresetName}
                    onSubmitEditing={handleSavePreset}
                  />
                  <TouchableOpacity 
                    onPress={handleSavePreset}
                    style={[styles.savePresetConfirmButton, { backgroundColor: colors.primary }]}
                    disabled={!newPresetName.trim()}
                  >
                    <Text style={styles.savePresetConfirmText}>Save Preset</Text>
                  </TouchableOpacity>
                </View>
              )}

              {showPresets && (
                <View style={styles.presetsList}>
                  {presets.length === 0 ? (
                    <View style={styles.emptyState}>
                      <Star size={24} color="#666666" />
                      <Text style={styles.noPresetsText}>No presets saved yet</Text>
                      <Text style={styles.emptyStateSubtext}>Save your favorite player groups for quick setup</Text>
                    </View>
                  ) : (
                    presets.map((preset) => {
                      const isSelected = getSelectedPresetId() === preset.id;
                      return (
                        <View key={preset.id} style={styles.presetItem}>
                          <TouchableOpacity 
                            onPress={() => handleLoadPreset(preset.id)}
                            style={styles.presetInfo}
                          >
                            <View style={styles.presetIconWrapper}>
                              <Users size={14} color={colors.primary} />
                            </View>
                            <View style={styles.presetDetails}>
                              <Text style={styles.presetName}>{preset.name}</Text>
                              <Text style={styles.presetPlayerCount}>
                                {preset.players.length} player{preset.players.length !== 1 ? 's' : ''} • Tap to load
                              </Text>
                            </View>
                            {isSelected && (
                              <View style={styles.selectedIndicator}>
                                <Check size={16} color={colors.primary} />
                              </View>
                            )}
                          </TouchableOpacity>
                          <TouchableOpacity 
                            onPress={() => handleDeletePreset(preset.id)}
                            style={styles.presetDeleteButton}
                          >
                            <Trash2 size={16} color="#FF3B30" />
                          </TouchableOpacity>
                        </View>
                      );
                    })
                  )}
                </View>
              )}
            </View>
          )}
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
          <Text style={styles.sectionTitle}>Number of Spies</Text>
          <View style={[styles.spyOptionsWrap, isSmallScreen && styles.spyOptionsWrapSmall]}>
            {spyOptions.map((option) => (
              <TouchableOpacity
                key={option.value.toString()}
                style={[
                  // inline width to make rows responsive across device sizes
                  { width: optionWidth },
                  styles.spyOption,
                  isSmallScreen && styles.spyOptionSmall,
                  numspies === option.value && { ...styles.spyOptionSelected, borderColor: colors.error, backgroundColor: colors.surface }
                ]}
                onPress={() => setNumspies(option.value as number | 'random')}
              >
                <Text style={[
                  styles.spyOptionText,
                  numspies === option.value && { ...styles.spyOptionTextSelected, color: colors.error }
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

  {/* Spy Mode removed */}

        {/* Category Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Shuffle size={20} color="white" /> Question Category
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
    'Preferences': '⭐',
    'Social': '🫂',
    'Physical': '💪',
    'Money': '💰',
    'Relationships': '💝',
    'Work': '💼',
    'Education': '📚',
    'Sports': '⚽',
    'Music': '🎵',
    'Communication': '📲',
    'Grooming': '💇',
    'Chores': '🧺',
    'Maintenance': '🛠️',
    'Fitness': '🏋️',
    'Family': '👪',
    'Skills': '🧠',
    'Culture': '🏛️',
    'Knowledge': '📖',
    'Beliefs': '🕊️',
    'Experience': '🎟️',
    'Habits': '🧘',
    'Fashion': '👗',
    'Home': '🏠',
    'Miscellaneous': '🔮'
  };
  return iconMap[category] || '❓';
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
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  infoCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 20,
    marginVertical: 16,
    marginBottom: 8,
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
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  infoText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
    color: '#666666',
  },
  exampleText: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#666666',
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
    justifyContent: 'space-between',
  },
  editActionButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#333',
  },
  editActionText: {
    color: 'white',
    fontSize: 14,
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
  spyOptionsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  spyOptionsWrapSmall: {
    justifyContent: 'center',
  },
  spyOption: {
    width: 100,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    marginRight: 8,
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
  // Presets styles
  presetsContainer: {
    marginTop: 16,
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  presetsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  presetsToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 4,
  },
  presetsTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  savePresetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#3a3a3a',
  },
  savePresetText: {
    fontSize: 12,
    fontWeight: '600',
  },
  savePresetContainer: {
    marginTop: 12,
    gap: 12,
  },
  presetNameInput: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: 'white',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#3a3a3a',
  },
  savePresetConfirmButton: {
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  savePresetConfirmText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  presetsList: {
    marginTop: 12,
    gap: 8,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 20,
    gap: 8,
  },
  noPresetsText: {
    color: '#888888',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  emptyStateSubtext: {
    color: '#666666',
    fontSize: 12,
    textAlign: 'center',
  },
  presetItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#242424',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  presetInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  presetIconWrapper: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  presetDetails: {
    flex: 1,
  },
  presetName: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  presetPlayerCount: {
    color: '#888888',
    fontSize: 11,
    marginTop: 2,
  },
  presetDeleteButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#FF3B3020',
  },
  selectedIndicator: {
    marginLeft: 'auto',
    marginRight: 8,
  },
});