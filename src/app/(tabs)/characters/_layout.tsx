import { Stack } from 'expo-router/stack';
import { useTheme } from 'styled-components/native';

export default function CharactersLayout() {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.color.gray.c25,
        },
        headerTintColor: theme.color.gray.c900,
      }}
    />
  );
}
