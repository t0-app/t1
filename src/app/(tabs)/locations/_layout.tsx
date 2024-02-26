import { usePathname } from 'expo-router';
import { Stack } from 'expo-router/stack';
import { useTheme } from 'styled-components/native';

export default function LocationsLayout() {
  const pathname = usePathname();
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        headerTitle: pathname,
        headerStyle: {
          backgroundColor: theme.color.bg,
        },
        headerTintColor: theme.color.primary,
      }}
    />
  );
}
