import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Modal, Pressable, TextInput, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { ChevronLeft, Clock, RotateCcw, Eye } from 'lucide-react-native';
import { useGameStore } from '@/stores/game-store';
import { useCategoriesStore } from '@/stores/categories-store';
import { useTheme } from '@/hooks/useTheme';
import { useSettingsStore } from '@/stores/settings-store';
import { formatSpyReveal } from '@/utils/spyReveal';

export default function GameScreen() {
  const { rolesEnabled, revealOtherSpies } = useSettingsStore();
  const { colors } = useTheme();
  const { 
    players, 
    timerDuration, 
    selectedCategory, 
    gameState,
    resetGame,
    updatePlayer 
  } = useGameStore();
  const { getCategory } = useCategoriesStore();

  const [timeLeft, setTimeLeft] = useState(timerDuration * 60);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  // responsive player card sizing
  const screenWidth = Dimensions.get('window').width;
  const playersPerRow = 3; // always show 3 per row
  const containerHorizontalPadding = 40; // content paddingHorizontal: 20 on styles.playersContainer
  const gap = 16; // matches styles.playersGrid gap
  const playerCardWidth = Math.floor((screenWidth - containerHorizontalPadding - (playersPerRow - 1) * gap) / playersPerRow);

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
    'Health': '💪',
    'Technology': '💻',
    'Entertainment': '🎬',
    'Preferences': '⭐',
    'Social': '🫂',
    'Travel': '✈️',
    'Physical': '🏋️',
    'Skills': '🧠',
    'Culture': '🏛️',
    'Family': '👪',
    'Grooming': '💇',
    'Chores': '🧺',
    'Maintenance': '🛠️',
    'Habits': '🔁',
    'Knowledge': '📖',
    'Beliefs': '🕊️',
    'Experience': '🎟️'
  };
  return iconMap[category] || '❓';
}

  const handlePlayerPress = (playerId: string) => {
    setSelectedPlayer(playerId);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    // start modal close animation, clear selection on dismiss to avoid content flash
    setModalOpen(false);
  };

  const handleRestart = () => {
    resetGame();
    router.back();
  };

  const selectedPlayerData = selectedPlayer ? players.find(p => p.id === selectedPlayer) : null;
  const playerRole = selectedPlayerData ? gameState.playerRoles[selectedPlayerData.id] : null;

  // (spyCount & otherSpies removed - now computed inline only when needed)

  // console.log('[GAME SCREEN] Spy count calculated:', spyCount, 'from roles:', gameState.playerRoles);

  const getCategoryDisplay = (category: string) => {
  if (category === 'random') return { name: 'Topic', icon: '🎲' };
  const c = getCategory(category);
  return c ? { name: c.name, icon: c.icon || getCategoryIcon(category) } : { name: 'Topic', icon: '🎲' };
  };

  if (!gameState.currentTopic) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Game not properly initialized</Text>
      </SafeAreaView>
    );
  }

  const categoryInfo = getCategoryDisplay(gameState.currentTopic.category);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={24} color={colors.primary} />
        </TouchableOpacity>
        <Text style={[styles.categoryText, { color: colors.textSecondary }]}>
          {selectedCategory === 'random' ? 'Random Mix' : getCategory(selectedCategory)?.name || selectedCategory}
        </Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.timerContainer}>
        <Clock size={24} color={colors.text} />
        <Text style={[styles.timerText, { color: colors.text }]}>{formatTime(timeLeft)}</Text>
      </View>

      <Text style={[styles.instructionText, { color: colors.textSecondary }]}>Tap to see role.</Text>

      <View style={styles.playersContainer}>
  <ScrollView style={{ flex: 1 }} contentContainerStyle={[styles.playersGrid, { paddingBottom: 140 }]} showsVerticalScrollIndicator={true} keyboardShouldPersistTaps="handled">
          {players.map((player) => (
            <View key={player.id} style={[styles.playerCard, { width: playerCardWidth, backgroundColor: colors.surface }]}>
              <TouchableOpacity
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => handlePlayerPress(player.id)}
              >
                <View style={[styles.playerAvatar, { backgroundColor: colors.primary }]}> 
                  <Text style={styles.playerInitial}>
                    {player.name.charAt(0).toUpperCase()}
                  </Text>
                </View>
                <Text style={[styles.playerName, { color: colors.text }]} numberOfLines={1} ellipsizeMode="tail">{player.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.goBackButton}>
          <LinearGradient
            colors={[colors.primary, colors.secondary || '#5AC8FA']}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.goBackButton}
          >
            <View style={styles.goBackIconContainer}>
              <ChevronLeft size={32} color="#fff" />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Role Modal */}
      <Modal
        visible={modalOpen}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalOpen(false)}
        onDismiss={() => setSelectedPlayer(null)}
      >
        <Pressable style={styles.modalOverlay} onPress={handleCloseModal}>
          <View style={[styles.modalContent, { backgroundColor: colors.surface }]}>
            {selectedPlayerData && (
              <Text style={[styles.playerNameInModal, { color: colors.text }]} numberOfLines={1} ellipsizeMode="tail">{selectedPlayerData.name}</Text>
            )}
            {playerRole?.isSpy ? (
              <View style={styles.spyContainer}>
                <Eye size={48} color={colors.primary} />
                {(() => {
                  if (!selectedPlayerData) return null;
                  const spyNames = Object.entries(gameState.playerRoles || {})
                    .filter(([pid, info]) => info.isSpy && pid !== selectedPlayerData.id)
                    .map(([pid]) => players.find(p => p.id === pid)?.name)
                    .filter(Boolean) as string[];
                  const revealLine = revealOtherSpies ? formatSpyReveal(spyNames) : null;
                  return (
                    <>
                      <Text style={[styles.spyText, { color: colors.text }]}>You are the spy!</Text>
                      {revealLine && (
                        <Text style={[styles.spyRevealText, { color: colors.textSecondary, backgroundColor: colors.surface, borderColor: colors.border }]}>{revealLine}</Text>
                      )}
                    </>
                  );
                })()}
              </View>
            ) : (
              rolesEnabled ? (
                <View style={styles.roleContainer}>
                  <Text style={[styles.topicText, { color: colors.text }]}>
                    {categoryInfo.icon} {categoryInfo.name}: {gameState.currentTopic.name}
                  </Text>
                  <Text style={[styles.roleText, { color: colors.text }]}>
                    Your role is: {playerRole?.role}
                  </Text>
                </View>
              ) : (
                <View style={styles.roleContainer}>
                  <Text style={[styles.topicText, { color: colors.text }]}>
                    {categoryInfo.icon} {categoryInfo.name}: {gameState.currentTopic.name}
                  </Text>
                  <Text style={[styles.roleText, { color: colors.text }]}>
                    Your word is: {gameState.currentTopic?.name ?? ''}
                  </Text>
                </View>
              )
            )}
            <TouchableOpacity style={[styles.closeButton, { backgroundColor: colors.primary }]} onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
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
  backText: {
    fontSize: 16,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  gap: 6,
  },
  timerText: {
    fontSize: 32,
    fontWeight: '300',
  },
  instructionText: {
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
    // width is calculated inline to make a 3-column responsive grid
    height: 104,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  playerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerInitial: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  playerName: {
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
    backgroundColor: 'white',
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
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  paddingVertical: 28,
  paddingHorizontal: 24,
  alignItems: 'center',
  minHeight: 160,
  },
  playerNameInModal: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  spyContainer: {
    alignItems: 'center',
    gap: 24,
  },
  spyText: {
    fontSize: 24,
    fontWeight: '600',
  },
  spyRevealText: {
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
  },
  roleContainer: {
    alignItems: 'center',
    gap: 16,
  },
  topicText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  roleText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 100,
  },
  customWordContainer: {
    alignItems: 'center',
    gap: 8,
  },
  customWordLabel: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 8,
  },
  customWordText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});