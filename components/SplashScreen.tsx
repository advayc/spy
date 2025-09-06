import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Animated as RNAnimated } from 'react-native';

export default function SplashScreen() {
  // Animation values for eye drawing
  const eyeStroke = useRef(new Animated.Value(0)).current;
  // Animation for buttons fade-in and slide up
  const buttonsOpacity = useRef(new Animated.Value(0)).current;
  const buttonsTranslate = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    // Animate the eye drawing
    Animated.timing(eyeStroke, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: false,
    }).start(() => {
      // Fade in and slide up buttons after eye is drawn
      Animated.parallel([
        Animated.timing(buttonsOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(buttonsTranslate, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        })
      ]).start();
    });
  }, [eyeStroke, buttonsOpacity, buttonsTranslate]);

  // Eye SVG path (replace with your actual SVG path from icon.svg)
  const eyePath =
    'M64 128C64 92.7 92.7 64 128 64C163.3 64 192 92.7 192 128C192 163.3 163.3 192 128 192C92.7 192 64 163.3 64 128ZM128 160C146.7 160 160 146.7 160 128C160 109.3 146.7 96 128 96C109.3 96 96 109.3 96 128C96 146.7 109.3 160 128 160Z';

  // Animate strokeDashoffset to "draw" the path
  const pathLength = 600; // Approximate, adjust for your SVG
  const strokeDashoffset = eyeStroke.interpolate({
    inputRange: [0, 1],
    outputRange: [pathLength, 0],
  });
  // Create an animated Path component
  const AnimatedPath = RNAnimated.createAnimatedComponent(Path);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: 1 }}>
        <Svg width={180} height={180} viewBox="0 0 256 256">
          <AnimatedPath
            d={eyePath}
            stroke="#007AFF"
            strokeWidth={8}
            fill="none"
            strokeDasharray={pathLength}
            strokeDashoffset={strokeDashoffset}
          />
        </Svg>
      </Animated.View>
      <Animated.View style={[styles.buttonsContainer, {
        opacity: buttonsOpacity,
        transform: [{ translateY: buttonsTranslate }],
      }]}> 
        {/* Example buttons, replace with your actual splash buttons */}
        <View style={styles.button} />
        <View style={styles.button} />
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
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 48,
    gap: 24,
  },
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#007AFF',
  },
});
