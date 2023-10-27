import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppProviders } from 'context';
import { Slot, usePathname } from 'expo-router';
import { Text, View } from 'components/style';
import './../global.js';

function NavFooter() {
  const pathname = usePathname();
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom,
      }}>
      <Text>{pathname}</Text>
    </View>
  );
}

export default function RootLayout() {
  return (
    <AppProviders>
      <Slot />
      <NavFooter />
    </AppProviders>
  );
}
