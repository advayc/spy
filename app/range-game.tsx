import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput, Alert, FlatList } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, Plus, Trash2, Play, Clock, Users, Target } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRangeGameStore } from '@/stores/range-game-store';
import { useSettingsStore, redColorScheme } from '@/stores/settings-store';
import { useTheme } from '@/hooks/useTheme';
import { useVibration } from '@/hooks/useVibration';

export default function RangeGameScreen() {
  const vibrate = useVibration();
  const { setColorScheme, colorScheme } = useSettingsStore();
  
  // Switch to red theme for range game
  useEffect(() => {
    const originalScheme = colorScheme;
    setColorScheme(redColorScheme);
    
    return () => {
      // Restore original theme when leaving
      setColorScheme(originalScheme);
    };
  }, [colorScheme, setColorScheme]);

  const { colors } = useTheme();
  
  const { 
    players, 
    timerDuration, 
    addPlayer, 
    removePlayer, 
    setTimerDuration,
    startGame,
    gameStarted,
    gamePhase,
    currentQuestion
  } = useRangeGameStore();

  const [newPlayerName, setNewPlayerName] = useState('');

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
    vibrate.light();
  };

  const handleStartGame = () => {
    if (players.length < 3) {
      Alert.alert('Not enough players', 'You need at least 3 players to start the game.');
      return;
    }
    if (players.length > 15) {
      Alert.alert('Too many players', 'Maximum 15 players allowed.');
      return;
    }
    
    startGame();
    vibrate.medium();
    router.push('/range-play');
  };

  const renderPlayerItem = ({ item, index }: { item: any; index: number }) => (
    <View style={[styles.playerItem, { backgroundColor: colors.surface, borderColor: `${colors.primary}20` }]}>
      <View style={styles.playerInfo}>
        <Text style={[styles.playerNumber, { color: colors.primary }]}>#{index + 1}</Text>
        <Text style={[styles.playerName, { color: colors.text }]}>{item.name}</Text>
      </View>
      <TouchableOpacity 
        style={styles.removeButton}
        onPress={() => handleRemovePlayer(item.id)}
      >
        <Trash2 size={16} color="#FF3B30" />
      </TouchableOpacity>
    </View>
  );

  if (gameStarted) {
    router.push('/range-play');
    return null;
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { borderBottomColor: `${colors.primary}20` }]}>
        <TouchableOpacity 
          onPress={() => router.back()} 
          style={styles.backButton}
        >
          <ChevronLeft size={24} color={colors.primary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Range Game</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Game Info */}
        <View style={[styles.infoCard, { backgroundColor: colors.surface }]}>
          <View style={styles.infoHeader}>
            <Target size={24} color={colors.primary} />
            <Text style={[styles.infoTitle, { color: colors.text }]}>How to Play</Text>
          </View>
          <Text style={[styles.infoText, { color: colors.textSecondary }]}>
            Everyone gets the same prompt except one person who gets a range to answer within. 
            Discuss your answers and try to find who has the different prompt!
          </Text>
          <Text style={[styles.exampleText, { color: colors.textSecondary }]}>
            Example: &quot;Normal age of first kiss&quot; vs &quot;Range: 1-20&quot;
          </Text>
        </View>

        {/* Timer Settings */}
        <View style={[styles.section, { backgroundColor: colors.surface }]}>
          <View style={styles.sectionHeader}>
            <Clock size={20} color={colors.primary} />
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Timer</Text>
          </View>
          <View style={styles.timerOptions}>
            {timerOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.timerOption,
                  { borderColor: `${colors.primary}40` },
                  timerDuration === option.value && { 
                    borderColor: colors.primary, 
                    backgroundColor: `${colors.primary}20` 
                  }
                ]}
                onPress={() => {
                  setTimerDuration(option.value);
                  vibrate.light();
                }}
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

        {/* Players Section */}
        <View style={[styles.section, { backgroundColor: colors.surface }]}>
          <View style={styles.sectionHeader}>
            <Users size={20} color={colors.primary} />
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Players ({players.length}/15)
            </Text>
          </View>

          {/* Add Player */}
          <View style={styles.addPlayerSection}>
            <TextInput
              style={[styles.playerInput, { borderColor: `${colors.primary}40`, color: colors.text }]}
              placeholder="Enter player name"
              placeholderTextColor={colors.textSecondary}
              value={newPlayerName}
              onChangeText={setNewPlayerName}
              onSubmitEditing={handleAddPlayer}
              maxLength={20}
            />
            <TouchableOpacity 
              style={[styles.addButton, { backgroundColor: colors.primary }]}
              onPress={handleAddPlayer}
              disabled={!newPlayerName.trim() || players.length >= 15}
            >
              <Plus size={20} color="white" />
            </TouchableOpacity>
          </View>

          {/* Players List */}
          {players.length > 0 ? (
            <FlatList
              data={players}
              renderItem={renderPlayerItem}
              keyExtractor={(item) => item.id}
              style={styles.playersList}
              scrollEnabled={false}
            />
          ) : (
            <View style={styles.emptyState}>
              <Text style={[styles.emptyStateText, { color: colors.textSecondary }]}>
                Add players to start the game
              </Text>
            </View>
          )}
        </View>

        {/* Start Game Button */}
        {players.length >= 3 && (
          <TouchableOpacity 
            style={styles.startButton}
            onPress={handleStartGame}
          >
            <LinearGradient
              colors={[colors.primary, colors.secondary]}
              style={styles.startButtonGradient}
            >
              <Play size={24} color="white" />
              <Text style={styles.startButtonText}>Start Range Game</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}

        <View style={styles.bottomPadding} />
      </ScrollView>
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
  headerRight: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  infoCard: {
    padding: 20,
    borderRadius: 16,
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
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
  addPlayerSection: {
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
  playersList: {
    maxHeight: 300,
  },
  playerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 8,
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  playerNumber: {
    fontSize: 14,
    fontWeight: '600',
    width: 24,
  },
  playerName: {
    fontSize: 16,
    fontWeight: '500',
  },
  removeButton: {
    padding: 4,
  },
  emptyState: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 14,
  },
  startButton: {
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 20,
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
  bottomPadding: {
    height: 40,
  },
});
