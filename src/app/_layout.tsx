import React, { useCallback, useEffect } from 'react';
import { Inter_300Light, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import { Slot, useGlobalSearchParams, usePathname } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import styled from 'styled-components/native';
import { AppProviders } from 'src/context';
import './../../global.js';

export const Container = styled.View`
  flex: 1;
`;

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const pathname = usePathname();
  const params = useGlobalSearchParams();

  useEffect(() => {
    console.log('TODO: track', { pathname, params });
  }, [pathname, params]);

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
