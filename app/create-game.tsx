import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput, Alert, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, Plus, Trash2, Play, Clock, List, Shuffle, Edit2, Save, ChevronDown, ChevronUp, Users, BookOpen, Star, Check } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useGameStore } from '@/stores/game-store';
import { useSettingsStore } from '@/stores/settings-store';
import { usePlayerPresetsStore } from '@/stores/player-presets-store';
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
    numspies,
    setSelectedCategory,
    addPlayer, 
    removePlayer, 
    updatePlayer, 
    setPlayers,
    setTimerDuration, 
    startGame,
    setNumspies,
  } = useGameStore();
  
  // Get screen width for responsive layout
  const screenWidth = Dimensions.get('window').width;
  const isSmallScreen = screenWidth < 390; // iPhone SE and smaller
  
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

  const [newPlayerName, setNewPlayerName] = useState('');
  const [editingPlayer, setEditingPlayer] = useState<string | null>(null);
  const [editPlayerName, setEditPlayerName] = useState('');
  
  // Preset states
  const [showPresets, setShowPresets] = useState(false);
  const [newPresetName, setNewPresetName] = useState('');
  const [showSavePreset, setShowSavePreset] = useState(false);

  const { getAllCategories } = useCategoriesStore();
  const categories = [
    ...getAllCategories().map(c => ({ id: c.id, name: c.name, icon: c.icon })),
    { id: 'random', name: 'Random Mix', icon: '🎲' },
  ];

  // Remove local state - use store state instead

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
      addPreset(newPresetName.trim(), players);
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
    // Recalculate min/max for current player count
    const maxAllowed = Math.min(15, maxSpies, players.length);
    const minAllowed = Math.max(0, Math.min(minSpies, maxAllowed));
    const chosen = numspies === 'random'
      ? 'random'
      : Math.min(maxAllowed, Math.max(minAllowed, numspies));
    startGame(chosen);
    vibrate.success();
    router.push('/game');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={24} color={colors.primary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Create Game</Text>
        <TouchableOpacity onPress={() => router.push('/topics')} style={styles.topicsButton}>
          <List size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
  {/* Players Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Players ({players.length}/15)</Text>
          
          <View style={styles.addPlayerContainer}>
            <TextInput
              style={[styles.playerInput, { backgroundColor: colors.surface, color: colors.text }]}
              placeholder="Enter player name"
              placeholderTextColor={colors.textSecondary}
              value={newPlayerName}
              onChangeText={setNewPlayerName}
              onSubmitEditing={handleAddPlayer}
              maxLength={20}
            />
            <TouchableOpacity 
              onPress={handleAddPlayer}
              style={[styles.addButton, { backgroundColor: colors.surface }, !newPlayerName.trim() && styles.addButtonDisabled]}
              disabled={!newPlayerName.trim() || players.length >= 15}
            >
              <Plus size={20} color={!newPlayerName.trim() || players.length >= 15 ? colors.textSecondary : colors.primary} />
            </TouchableOpacity>
          </View>

          <View style={styles.playersGrid}>
            {players.map((player) => (
              <View key={player.id} style={[styles.playerCard, { backgroundColor: colors.surface }]}>
                {editingPlayer === player.id ? (
                  <View style={styles.editPlayerContainer}>
                    <TextInput
                      style={[styles.editPlayerInput, { backgroundColor: colors.background, color: colors.text, borderColor: colors.border }]}
                      value={editPlayerName}
                      onChangeText={setEditPlayerName}
                      onSubmitEditing={handleSavePlayerEdit}
                      autoFocus
                    />
                    <View style={styles.editPlayerActions}>
                      <TouchableOpacity onPress={handleCancelPlayerEdit} style={[styles.editActionButton, { backgroundColor: colors.background }]}>
                        <Text style={[styles.editActionText, { color: colors.text }]}>Cancel</Text>
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

          {/* Player Presets */}
          {playerPresetsEnabled && (
            <View style={[styles.presetsContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <View style={styles.presetsHeader}>
                <TouchableOpacity 
                  onPress={() => setShowPresets(!showPresets)}
                  style={styles.presetsToggle}
                >
                  <BookOpen size={18} color={colors.primary} />
                  <Text style={[styles.presetsTitle, { color: colors.text }]}>Player Presets</Text>
                  {showPresets ? <ChevronUp size={18} color={colors.primary} /> : <ChevronDown size={18} color={colors.primary} />}
                </TouchableOpacity>
                {players.length > 0 && (
                  <TouchableOpacity 
                    onPress={() => setShowSavePreset(!showSavePreset)}
                    style={[styles.savePresetButton, { backgroundColor: showSavePreset ? colors.primary + '20' : colors.surface, borderColor: colors.border }]}
                  >
                    <Save size={14} color={colors.primary} />
                    <Text style={[styles.savePresetText, { color: colors.primary }]}>Save</Text>
                  </TouchableOpacity>
                )}
              </View>

              {showSavePreset && (
                <View style={styles.savePresetContainer}>
                  <TextInput
                    style={[styles.presetNameInput, { backgroundColor: colors.background, color: colors.text, borderColor: colors.border }]}
                    placeholder="Preset name"
                    placeholderTextColor={colors.textSecondary}
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
                      <Star size={24} color={colors.textSecondary} />
                      <Text style={[styles.noPresetsText, { color: colors.textSecondary }]}>No presets saved yet</Text>
                      <Text style={[styles.emptyStateSubtext, { color: colors.textSecondary }]}>Save your favorite player groups for quick setup</Text>
                    </View>
                  ) : (
                    presets.map((preset) => {
                      const isSelected = getSelectedPresetId() === preset.id;
                      return (
                        <View key={preset.id} style={[styles.presetItem, { backgroundColor: colors.background, borderColor: colors.border }]}>
                          <TouchableOpacity 
                            onPress={() => handleLoadPreset(preset.id)}
                            style={styles.presetInfo}
                          >
                            <View style={[styles.presetIconWrapper, { backgroundColor: colors.surface }]}>
                              <Users size={14} color={colors.primary} />
                            </View>
                            <View style={styles.presetDetails}>
                              <Text style={[styles.presetName, { color: colors.text }]}>{preset.name}</Text>
                              <Text style={[styles.presetPlayerCount, { color: colors.textSecondary }]}>
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
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            <Clock size={20} color={colors.text} /> Game Timer
          </Text>
          <View style={styles.timerOptions}>
            {timerOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.timerOption,
                  { backgroundColor: colors.surface },
                  timerDuration === option.value && { ...styles.timerOptionSelected, borderColor: colors.primary, backgroundColor: colors.surface }
                ]}
                onPress={() => setTimerDuration(option.value)}
              >
                <Text style={[
                  styles.timerOptionText,
                  { color: colors.textSecondary },
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
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Number of spies</Text>
          <View style={[styles.spyOptionsWrap, isSmallScreen && styles.spyOptionsWrapSmall]}>
            {spyOptions.map((option) => (
              <TouchableOpacity
                key={String(option.value)}
                style={[
                  styles.spyOption,
                  { backgroundColor: colors.surface },
                  isSmallScreen && styles.spyOptionSmall,
                  numspies === option.value && { ...styles.spyOptionSelected, borderColor: colors.error, backgroundColor: colors.surface }
                ]}
                onPress={() => setNumspies(option.value as number | 'random')}
              >
                <Text style={[
                  styles.spyOptionText,
                  { color: colors.textSecondary },
                  numspies === option.value && { ...styles.spyOptionTextSelected, color: colors.error }
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Category Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            <Shuffle size={20} color={colors.text} /> Topic Category
          </Text>
          <View style={styles.categoriesGrid}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryCard,
                  { backgroundColor: colors.surface },
                  selectedCategory === category.id && { ...styles.categoryCardSelected, borderColor: colors.primary, backgroundColor: colors.surface }
                ]}
                onPress={() => setSelectedCategory(category.id)}
              >
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={[
                  styles.categoryName,
                  { color: colors.textSecondary },
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
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
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
  },
  addButton: {
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
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
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
  },
  editActionText: {
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
  },
  spyOptionText: {
    fontSize: 14,
    fontWeight: '500',
  },
  spyOptionTextSelected: {
    fontWeight: '600',
  },
  timerOption: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  timerOptionSelected: {
  },
  timerOptionText: {
    fontSize: 16,
    fontWeight: '500',
  },
  timerOptionTextSelected: {
    fontWeight: '600',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    width: '48%',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  categoryCardSelected: {
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  categoryNameSelected: {
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
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
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
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
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
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  emptyStateSubtext: {
    fontSize: 12,
    textAlign: 'center',
  },
  presetItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  presetDetails: {
    flex: 1,
  },
  presetName: {
    fontSize: 14,
    fontWeight: '600',
  },
  presetPlayerCount: {
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
