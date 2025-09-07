import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft, Users, Clock, Target, RotateCcw } from 'lucide-react-native';
import { useRangeGameStore } from '@/stores/range-game-store';
import { useTheme } from '@/hooks/useTheme';
import { useVibration } from '@/hooks/useVibration';

export default function RangePlayScreen() {
  const { colors } = useTheme();
  const vibrate = useVibration();
  
  const { 
    players, 
    currentQuestion,
    gamePhase,
    timerDuration,
    currentTimer,
    votes,
    nextPhase,
    endGame,
    resetGame,
    setCurrentTimer,
    addVote,
    selectNewQuestion,
    incrementCorrectGuesses,
    incrementGamesPlayed
  } = useRangeGameStore();

  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const [showAnswers, setShowAnswers] = useState(false);
  const [timerActive, setTimerActive] = useState(false);

  // Timer effect
  useEffect(() => {
    if (timerActive && currentTimer > 0) {
      const interval = setInterval(() => {
        setCurrentTimer(currentTimer - 1);
      }, 1000);
      
      return () => clearInterval(interval);
    } else if (currentTimer === 0 && timerActive) {
      setTimerActive(false);
      vibrate.medium();
      Alert.alert('Time\'s up!', 'Discussion time is over.');
    }
  }, [currentTimer, timerActive, setCurrentTimer, vibrate]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const outlierPlayer = players.find(p => p.isOutlier);
  const normalPlayers = players.filter(p => !p.isOutlier);

  const handleStartTimer = () => {
    setCurrentTimer(timerDuration * 60);
    setTimerActive(true);
    vibrate.light();
  };

  const handleVote = () => {
    if (!selectedPlayer) {
      Alert.alert('No selection', 'Please select who you think has the range prompt.');
      return;
    }
    
    // Calculate results
    const voteCount = Object.values(votes).filter(vote => vote === selectedPlayer).length + 1;
    const correctGuess = selectedPlayer === outlierPlayer?.id;
    
    if (correctGuess) {
      incrementCorrectGuesses();
    }
    
    Alert.alert(
      'Results',
      correctGuess 
        ? `Correct! ${outlierPlayer?.name} had the range prompt: "${currentQuestion?.rangePrompt}"`
        : `Wrong! ${outlierPlayer?.name} had the range prompt. ${votes[selectedPlayer] || 'No one'} was selected.`,
      [
        {
          text: 'New Game',
          onPress: () => {
            selectNewQuestion();
            resetGame();
            router.push('/range-game');
          }
        },
        {
          text: 'Home',
          onPress: () => {
            endGame();
            router.push('/');
          }
        }
      ]
    );
  };

  const handleNewGame = () => {
    Alert.alert(
      'New Game',
      'Start a new round with different prompts?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'New Game',
          onPress: () => {
            selectNewQuestion();
            resetGame();
            router.push('/range-game');
          }
        }
      ]
    );
  };

  const handleGoHome = () => {
    Alert.alert(
      'End Game',
      'Are you sure you want to end the game?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'End Game',
          onPress: () => {
            endGame();
            router.push('/');
          }
        }
      ]
    );
  };

  if (!currentQuestion) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.errorContainer}>
          <Text style={[styles.errorText, { color: colors.text }]}>
            No question loaded. Please start a new game.
          </Text>
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: colors.primary }]}
            onPress={() => router.push('/range-game')}
          >
            <Text style={styles.buttonText}>Back to Setup</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { borderBottomColor: `${colors.primary}20` }]}>
        <TouchableOpacity 
          onPress={handleGoHome} 
          style={styles.backButton}
        >
          <ChevronLeft size={24} color={colors.primary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Range Game</Text>
        <TouchableOpacity 
          onPress={handleNewGame}
          style={styles.actionButton}
        >
          <RotateCcw size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Game Status */}
        <View style={[styles.statusCard, { backgroundColor: colors.surface }]}>
          <View style={styles.statusRow}>
            <View style={styles.statusItem}>
              <Users size={20} color={colors.primary} />
              <Text style={[styles.statusText, { color: colors.text }]}>
                {players.length} Players
              </Text>
            </View>
            <View style={styles.statusItem}>
              <Target size={20} color={colors.primary} />
              <Text style={[styles.statusText, { color: colors.text }]}>
                {currentQuestion.category}
              </Text>
            </View>
          </View>
        </View>

        {/* Prompts */}
        <View style={[styles.promptsCard, { backgroundColor: colors.surface }]}>
          <Text style={[styles.promptsTitle, { color: colors.text }]}>Your Prompts</Text>
          
          <View style={[styles.promptBox, { borderColor: colors.primary }]}>
            <Text style={[styles.promptLabel, { color: colors.primary }]}>Most Players Get:</Text>
            <Text style={[styles.promptText, { color: colors.text }]}>
              {currentQuestion.prompt}
            </Text>
          </View>

          <View style={[styles.promptBox, { borderColor: colors.secondary }]}>
            <Text style={[styles.promptLabel, { color: colors.secondary }]}>One Player Gets:</Text>
            <Text style={[styles.promptText, { color: colors.text }]}>
              {currentQuestion.rangePrompt}
            </Text>
            {!showAnswers && (
              <TouchableOpacity 
                style={[styles.revealButton, { backgroundColor: `${colors.secondary}20` }]}
                onPress={() => setShowAnswers(true)}
              >
                <Text style={[styles.revealButtonText, { color: colors.secondary }]}>
                  Tap to reveal after discussion
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {currentQuestion.expectedRange && (
            <Text style={[styles.hintText, { color: colors.textSecondary }]}>
              Expected range: {currentQuestion.expectedRange}
            </Text>
          )}
        </View>

        {/* Timer */}
        <View style={[styles.timerCard, { backgroundColor: colors.surface }]}>
          <View style={styles.timerHeader}>
            <Clock size={20} color={colors.primary} />
            <Text style={[styles.timerTitle, { color: colors.text }]}>Discussion Timer</Text>
          </View>
          
          <Text style={[styles.timerDisplay, { color: colors.primary }]}>
            {formatTime(currentTimer)}
          </Text>
          
          <View style={styles.timerControls}>
            <TouchableOpacity 
              style={[
                styles.timerButton, 
                { backgroundColor: timerActive ? colors.error : colors.primary }
              ]}
              onPress={() => {
                if (timerActive) {
                  setTimerActive(false);
                } else {
                  handleStartTimer();
                }
              }}
            >
              <Text style={styles.timerButtonText}>
                {timerActive ? 'Pause' : 'Start Timer'}
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.timerButton, { backgroundColor: colors.textSecondary }]}
              onPress={() => {
                setCurrentTimer(timerDuration * 60);
                setTimerActive(false);
              }}
            >
              <Text style={styles.timerButtonText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Voting */}
        <View style={[styles.votingCard, { backgroundColor: colors.surface }]}>
          <Text style={[styles.votingTitle, { color: colors.text }]}>
            Who has the range prompt?
          </Text>
          
          <View style={styles.playerButtons}>
            {players.map((player) => (
              <TouchableOpacity
                key={player.id}
                style={[
                  styles.playerButton,
                  { borderColor: `${colors.primary}40` },
                  selectedPlayer === player.id && {
                    borderColor: colors.primary,
                    backgroundColor: `${colors.primary}20`
                  }
                ]}
                onPress={() => {
                  setSelectedPlayer(player.id);
                  vibrate.light();
                }}
              >
                <Text style={[
                  styles.playerButtonText,
                  { color: colors.text },
                  selectedPlayer === player.id && { color: colors.primary }
                ]}>
                  {player.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity 
            style={[
              styles.voteButton,
              { backgroundColor: selectedPlayer ? colors.primary : colors.textSecondary }
            ]}
            onPress={handleVote}
            disabled={!selectedPlayer}
          >
            <Text style={styles.voteButtonText}>
              {selectedPlayer ? `Vote for ${players.find(p => p.id === selectedPlayer)?.name}` : 'Select a player'}
            </Text>
          </TouchableOpacity>
        </View>

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
  actionButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  statusCard: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusText: {
    fontSize: 16,
    fontWeight: '500',
  },
  promptsCard: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  promptsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  promptBox: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    marginBottom: 12,
  },
  promptLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  promptText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
  },
  revealButton: {
    marginTop: 12,
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  revealButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  hintText: {
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 8,
  },
  timerCard: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  timerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    gap: 8,
  },
  timerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  timerDisplay: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  timerControls: {
    flexDirection: 'row',
    gap: 12,
  },
  timerButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  timerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  votingCard: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  votingTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  playerButtons: {
    gap: 12,
    marginBottom: 20,
  },
  playerButton: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
  },
  playerButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  voteButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  voteButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  bottomPadding: {
    height: 40,
  },
});
