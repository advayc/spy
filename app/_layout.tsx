import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { useState } from "react";
import SplashScreenComponent from "@/components/SplashScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

function RootLayoutNav() {
  return (
    <Stack screenOptions={{ 
      headerShown: false,
      contentStyle: { backgroundColor: '#000000' }
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="create-game" />
      <Stack.Screen name="game" />
      <Stack.Screen name="topics" />
      <Stack.Screen name="settings" />
    </Stack>
  );
}

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    // Show splash screen for the animation duration
    const timer = setTimeout(() => {
      setAppReady(true);
      SplashScreen.hideAsync();
    }, 3000); // Increased to 3 seconds to see the full animation
    return () => clearTimeout(timer);
  }, []);

  if (!appReady) {
    return <SplashScreenComponent />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="light" />
        <RootLayoutNav />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}