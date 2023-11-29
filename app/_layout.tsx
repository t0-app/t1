import React, { useCallback, useEffect } from 'react';
import { Inter_300Light, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { AppProviders } from 'context';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen, useGlobalSearchParams, usePathname } from 'expo-router';
import { Container } from 'components/style';
import './../global.js';

const STORYBOOK_ENABLED = __DEV__ && true;

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

  if (STORYBOOK_ENABLED) {
    const StorybookComponent = require('./../.storybook').default;

    return (
      <Container onLayout={onLayoutRootView}>
        <StorybookComponent />
      </Container>
    );
  }

  return (
    <Container onLayout={onLayoutRootView}>
      <AppProviders>
        <Slot />
      </AppProviders>
    </Container>
  );
}
