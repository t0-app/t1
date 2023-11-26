import React, { useCallback } from 'react';
import { Inter_300Light, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { AppProviders } from 'context';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { Container } from 'components/style';
import './../global.js';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter300: Inter_300Light,
    Inter400: Inter_400Regular,
    Inter700: Inter_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Container onLayout={onLayoutRootView}>
      <AppProviders>
        <Slot />
      </AppProviders>
    </Container>
  );
}
