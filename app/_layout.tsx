import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Slot, usePathname } from 'expo-router';

function NavFooter() {
  const pathname = usePathname();
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      style={{
        borderColor: 'red',
        borderWidth: 1,
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
    <View style={{ flex: 1, borderColor: 'red', borderWidth: 1 }}>
      <Slot />
      <NavFooter />
    </View>
  );
}
