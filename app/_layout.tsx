import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { useState } from "react";
import SplashScreenComponent from "@/components/SplashScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@/hooks/useTheme";

SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const { colors, isDark } = useTheme();
  
  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Stack screenOptions={{ 
        headerShown: false,
        contentStyle: { backgroundColor: colors.background }
      }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="create-game" />
        <Stack.Screen name="game" />
        <Stack.Screen name="topics" />
        <Stack.Screen name="settings" />
        <Stack.Screen name="range-play" />
        <Stack.Screen name="range-topics" />
        <Stack.Screen name="range-game" />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    // Show splash screen for a shorter duration to prevent crashes
    const timer = setTimeout(() => {
      setAppReady(true);
      SplashScreen.hideAsync().catch(console.error);
    }, 1000); // Reduced to 1 second to prevent crashes
    return () => clearTimeout(timer);
  }, []);

  if (!appReady) {
    return <SplashScreenComponent />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RootLayoutNav />
    </GestureHandlerRootView>
  );
}
