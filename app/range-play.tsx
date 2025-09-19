import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Modal, Pressable, ScrollView, Dimensions, Animated } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, Clock, RotateCcw, Eye } from 'lucide-react-native';
import { useRangeGameStore } from '@/stores/range-game-store';
import { useRangeTopicsStore } from '@/stores/range-topics-store';
import { useTheme } from '@/hooks/useTheme';
import { useVibration } from '@/hooks/useVibration';
import { getQuestionCategories } from '@/data/range-questions';
import { useSettingsStore } from '@/stores/settings-store';
import { formatSpyReveal } from '@/utils/spyReveal';

export default function RangeGamePlayScreen() {
  const { colors } = useTheme();
  const { revealOtherSpies } = useSettingsStore();
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

  const [questionModalVisible, setQuestionModalVisible] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(300)).current; // offscreen start

  const [timeLeft, setTimeLeft] = useState(timerDuration * 60);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // responsive player card sizing
  const screenWidth = Dimensions.get('window').width;
  const playersPerRow = 3;
  const containerHorizontalPadding = 40; // styles.playersContainer paddingHorizontal * 2
  const gridGap = 16; // matches styles.playersGrid gap
  const playerCardWidth = Math.floor((screenWidth - containerHorizontalPadding - (playersPerRow - 1) * gridGap) / playersPerRow);

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

  const handleShowQuestion = () => {
    // brief pop animation then open modal
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 0.93, duration: 80, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1.04, duration: 100, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 60, useNativeDriver: true }),
    ]).start(() => {
      setQuestionModalVisible(true);
      // slide in
      slideAnim.setValue(220);
      Animated.timing(slideAnim, { toValue: 0, duration: 240, useNativeDriver: true }).start();
    });
    vibrate.light();
  };

  const handleCloseQuestion = () => {
    // slide out then hide
  Animated.timing(slideAnim, { toValue: 220, duration: 200, useNativeDriver: true }).start(() => {
      setQuestionModalVisible(false);
    });
    vibrate.light();
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

      {/* Small Show Question button under topic */}
      <Animated.View style={[styles.showButtonInline, { transform: [{ scale: scaleAnim }] }]}>
        <TouchableOpacity onPress={handleShowQuestion} style={[styles.showButtonSmall, { backgroundColor: colors.primary }]}>
          <Text style={styles.showButtonSmallText}>Show Question</Text>
        </TouchableOpacity>
      </Animated.View>

      <View style={styles.timerContainer}>
        <Clock size={24} color="white" />
        <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
      </View>

      <Text style={styles.instructionText}>Tap to see role.</Text>

      <View style={styles.playersContainer}>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={[styles.playersGrid, { paddingBottom: 140 }]} showsVerticalScrollIndicator={true} keyboardShouldPersistTaps="handled">
          {players.map((player) => (
            <View key={player.id} style={[styles.playerCard, { width: playerCardWidth }]}>
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
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={handleRestart} style={styles.goBackButton}>
          <View style={styles.goBackIconContainer}>
            <RotateCcw size={32} color="#000" />
          </View>
        </TouchableOpacity>
      </View>

  {/* removed previous floating button (moved inline) */}

      {/* Question Modal (animated slide up) */}
      <Modal
        visible={questionModalVisible}
        transparent
        animationType="none"
        onRequestClose={handleCloseQuestion}
      >
        <Pressable style={styles.modalOverlay} onPress={handleCloseQuestion}>
          <Animated.View style={[styles.questionModalContent, { transform: [{ translateY: slideAnim }] }]}>
            <Text style={styles.questionTitle}>Question</Text>
            <Text style={styles.questionText}>{currentQuestion?.prompt}</Text>
            <TouchableOpacity onPress={handleCloseQuestion} style={[styles.closeButton, { backgroundColor: colors.primary }]}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </Animated.View>
        </Pressable>
      </Modal>

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
              (() => {
                const current = selectedPlayerData;
                if (!current) return null;
                const spyNames = players
                  .filter(p => p.isspy && p.id !== current.id)
                  .map(p => p.name);
                const revealLine = revealOtherSpies ? formatSpyReveal(spyNames) : null;
                return (
                  <View style={styles.spyContainer}>
                    <Eye size={48} color={colors.primary} />
                    <Text style={styles.spyText}>You are the spy!</Text>
                    {revealLine && (
                      <Text style={styles.spyRevealText}>{revealLine}</Text>
                    )}
                    <Text style={styles.customWordLabel}>Your range is:</Text>
                    <Text style={styles.customWordText}>
                      {currentQuestion.rangePrompt}
                    </Text>
                  </View>
                );
              })()
            ) : (
              <View style={styles.roleContainer}>
                <Text style={styles.topicText}>
                  {categoryInfo.icon} {categoryInfo.name}
                </Text>
                <Text style={styles.roleText}>
                  {currentQuestion.prompt}
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
  gap: 6,
  marginVertical: 20,
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
  marginBottom: 16,
  },
  playersContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  playersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: 20,
  },
  playerCard: {
    // width set inline to compute 3 columns responsively
    height: 104,
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
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
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  paddingVertical: 28,
  paddingHorizontal: 24,
  alignItems: 'center',
  minHeight: 160,
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
  spyRevealText: {
    color: '#999999',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2a2a2a',
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
  showButtonWrap: {
    position: 'absolute',
    right: 20,
    bottom: 120,
    zIndex: 50,
  },
  showButton: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },
  showButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  questionModalContent: {
    backgroundColor: '#1a1a1a',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  questionTitle: {
    color: '#666666',
    fontSize: 14,
    marginBottom: 8,
  },
  questionText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 12,
  },
  showButtonInline: {
    alignSelf: 'center',
  },
  showButtonSmall: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 4,
  },
  showButtonSmallText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  },
});