import { router, usePathname } from 'expo-router';
import { Stack } from 'expo-router/stack';
import { useTheme } from 'styled-components/native';
import Button from 'src/components/Button';
import { useSession } from 'src/context/auth';

export default function ProfileLayout() {
  const pathname = usePathname();
  const { signOut } = useSession();
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        headerTitle: pathname,
        headerStyle: {
          backgroundColor: theme.color.gray.c25,
        },
        headerTintColor: theme.color.gray.c900,
        headerLeft: () => (
          <Button
            text="Storybook"
            type="text"
            onPress={() => {
              router.replace('/_storybook/');
            }}
          />
        ),
        headerRight: () => (
          <Button
            text="Logout"
            type="text"
            onPress={() => {
              signOut();
              router.replace('/');
            }}
          />
        ),
      }}
    />
  );
}
