import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Modal, Pressable } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, Clock, RotateCcw, Eye } from 'lucide-react-native';
import { useRangeGameStore } from '@/stores/range-game-store';
import { useRangeTopicsStore } from '@/stores/range-topics-store';
import { useTheme } from '@/hooks/useTheme';
import { useVibration } from '@/hooks/useVibration';
import { getQuestionCategories } from '@/data/range-questions';

export default function RangeGamePlayScreen() {
  const { colors } = useTheme();
  const vibrate = useVibration();
  const {
    players,
    timerDuration,
    selectedCategory,
    currentQuestion,
    resetGame,
    updatePlayer,
  } = useRangeGameStore();
  const { getQuestionsForCategory, customCategories } = useRangeTopicsStore();

  const [timeLeft, setTimeLeft] = useState(timerDuration * 60);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  useEffect(() => {
    if (!isTimerRunning || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayerPress = (playerId: string) => {
    setSelectedPlayer(playerId);
    vibrate.light();
  };

  const handleCloseModal = () => {
    setSelectedPlayer(null);
    vibrate.light();
  };

  const handleRestart = () => {
    resetGame();
    router.back();
    vibrate.medium();
  };

  const getCategoryDisplay = (category: string) => {
    if (category === 'random') return { name: 'Random Mix', icon: '🎲' };
    const customCat = customCategories.find(cat => cat.id === category);
    if (customCat) return { name: customCat.name, icon: customCat.icon || '❓' };
    return { name: category, icon: getCategoryIcon(category) };
  };

  if (!players || !currentQuestion) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Game not properly initialized</Text>
      </SafeAreaView>
    );
  }

  const selectedPlayerData = selectedPlayer ? players.find(p => p.id === selectedPlayer) : null;
  const playerRole = selectedPlayerData ? selectedPlayerData : null;
  const categoryInfo = getCategoryDisplay(selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={24} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.categoryText}>
          {categoryInfo.name}
        </Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.timerContainer}>
        <Clock size={24} color="white" />
        <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
      </View>

  <Text style={styles.instructionText}>Tap to see role.</Text>

      <View style={styles.playersContainer}>
        <View style={styles.playersGrid}>
          {players.map((player) => (
            <View key={player.id} style={styles.playerCard}>
              <TouchableOpacity
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => handlePlayerPress(player.id)}
              >
                <View style={[styles.playerAvatar, { backgroundColor: colors.primary }]}>
                  <Text style={styles.playerInitial}>
                    {player.name.charAt(0).toUpperCase()}
                  </Text>
                </View>
                <Text style={styles.playerName} numberOfLines={1} ellipsizeMode="tail">{player.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={handleRestart} style={styles.goBackButton}>
          <View style={styles.goBackIconContainer}>
            <RotateCcw size={32} color="#000" />
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        visible={selectedPlayer !== null}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <Pressable style={styles.modalOverlay} onPress={handleCloseModal}>
          <View style={styles.modalContent}>
            {selectedPlayerData && (
              <Text style={styles.playerNameInModal} numberOfLines={1} ellipsizeMode="tail">{selectedPlayerData.name}</Text>
            )}
            {playerRole?.isspy ? (
              <View style={styles.spyContainer}>
                <Eye size={48} color={colors.primary} />
                <Text style={styles.spyText}>You're the spy!</Text>
                <Text style={styles.customWordLabel}>Your range is:</Text>
                <Text style={styles.customWordText}>
                  {currentQuestion.rangePrompt} ({currentQuestion.expectedRange || 'N/A'})
                </Text>
              </View>
            ) : (
              <View style={styles.roleContainer}>
                <Text style={styles.topicText}>
                  {categoryInfo.icon} {categoryInfo.name}: {currentQuestion.prompt}
                </Text>
                <Text style={styles.roleText}>
                  Your question is: {currentQuestion.prompt}
                </Text>
              </View>
            )}
            <TouchableOpacity 
              style={[styles.closeButton, { backgroundColor: colors.primary }]} 
              onPress={handleCloseModal}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

function getCategoryIcon(category: string): string {
  const iconMap: Record<string, string> = {
    'Life Events': '🎂',
    'Food': '🍕',
    'Money': '💰',
    'Relationships': '💝',
    'Work': '💼',
    'Education': '📚',
    'Sports': '⚽',
    'Music': '🎵',
    'Fashion': '👗',
    'Home': '🏠',
    'Miscellaneous': '🔮',
    'Daily Life': '🕒',
    'Hobbies': '🎨',
    'Health': '💊',
    'Technology': '🧑‍💻',
    'Entertainment': '🎬',
    'Preferences': '⭐',
    'Social': '🫂',
    'Travel': '✈️',
    'Physical': '💪',
    'Skills': '🧠',
    'Culture': '🏛️',
    'Family': '👪',
    'Grooming': '💇',
    'Chores': '🧺',
    'Maintenance': '🛠️',
    'Habits': '🧘',
    'Knowledge': '📖',
    'Beliefs': '🕊️',
    'Experience': '🎟️'
  };
  return iconMap[category] || '🔍';
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
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 8,
  },
  placeholder: {
    width: 32,
  },
  categoryText: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '500',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginVertical: 32,
  },
  timerText: {
    color: 'white',
    fontSize: 32,
    fontWeight: '300',
  },
  instructionText: {
    color: '#666666',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },
  playersContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  playersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'center',
  },
  playerCard: {
    width: 150,
    height: 120,
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerInitial: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  playerName: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  goBackButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  goBackIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#1a1a1a',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 48,
    paddingHorizontal: 32,
    alignItems: 'center',
    minHeight: 200,
  },
  playerNameInModal: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  spyContainer: {
    alignItems: 'center',
    gap: 24,
  },
  spyText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  roleContainer: {
    alignItems: 'center',
    gap: 16,
  },
  topicText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  roleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#007AFF',
    borderRadius: 12,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  errorText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 100,
  },
  customWordContainer: {
    alignItems: 'center',
    gap: 8,
  },
  customWordLabel: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 8,
  },
  customWordText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});