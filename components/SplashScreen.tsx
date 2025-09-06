import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Eye, Play, Settings } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSettingsStore } from '@/stores/settings-store';

export default function SplashScreen() {
  const { colorScheme } = useSettingsStore();
  // Animation values
  const logoScale = useRef(new Animated.Value(0.5)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleTranslate = useRef(new Animated.Value(30)).current;
  const buttonsOpacity = useRef(new Animated.Value(0)).current;
  const buttonsTranslate = useRef(new Animated.Value(50)).current;
  
  // Floating animation for buttons
  const buttonFloat1 = useRef(new Animated.Value(0)).current;
  const buttonFloat2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start animation sequence
    Animated.sequence([
      // Logo entrance
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(logoScale, {
          toValue: 1,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
      ]),
      // Title entrance
      Animated.parallel([
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(titleTranslate, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
      // Buttons entrance
      Animated.parallel([
        Animated.timing(buttonsOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(buttonsTranslate, {
          toValue: 0,
          tension: 50,
          friction: 8,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    // Start floating animations for buttons
    const createFloatingAnimation = (animatedValue: Animated.Value, delay: number) => {
      return Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(animatedValue, {
            toValue: -8,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(animatedValue, {
            toValue: 8,
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      );
    };

    const floating1 = createFloatingAnimation(buttonFloat1, 0);
    const floating2 = createFloatingAnimation(buttonFloat2, 1000);
    
    floating1.start();
    floating2.start();

    return () => {
      floating1.stop();
      floating2.stop();
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Animated.View style={[
        styles.logoContainer,
        {
          opacity: logoOpacity,
          transform: [{ scale: logoScale }],
        }
      ]}>
        <View style={[styles.eyeContainer, { backgroundColor: `${colorScheme.primary}20` }]}>
          <Eye size={80} color={colorScheme.primary} strokeWidth={2} />
        </View>
      </Animated.View>

      {/* Title */}
      <Animated.View style={[
        styles.titleContainer,
        {
          opacity: titleOpacity,
          transform: [{ translateY: titleTranslate }],
        }
      ]}>
        <Text style={styles.title}>Spy</Text>
        <Text style={styles.subtitle}>Social Deduction Party Game</Text>
      </Animated.View>

      {/* Animated Buttons */}
      <Animated.View style={[
        styles.buttonsContainer,
        {
          opacity: buttonsOpacity,
          transform: [{ translateY: buttonsTranslate }],
        }
      ]}>
        <Animated.View style={{
          transform: [{ translateY: buttonFloat1 }],
        }}>
          <TouchableOpacity style={styles.primaryButton}>
            <LinearGradient
              colors={[colorScheme.primary, colorScheme.secondary]}
              style={styles.gradientButton}
            >
              <Play size={20} color="white" />
              <Text style={styles.primaryButtonText}>Create Game</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
        
        <Animated.View style={{
          transform: [{ translateY: buttonFloat2 }],
        }}>
          <TouchableOpacity style={[styles.secondaryButton, { borderColor: `${colorScheme.primary}40` }]}>
            <Settings size={18} color={colorScheme.primary} />
            <Text style={[styles.secondaryButtonText, { color: colorScheme.primary }]}>Manage Topics</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  eyeContainer: {
    padding: 20,
    borderRadius: 50,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
  },
  buttonsContainer: {
    alignItems: 'center',
    gap: 20,
    width: '100%',
  },
  primaryButton: {
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  gradientButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 16,
    gap: 12,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 122, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 0.3)',
    gap: 8,
  },
  secondaryButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '500',
  },
});