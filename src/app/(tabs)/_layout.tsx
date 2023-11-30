import { Redirect, Tabs } from 'expo-router';
import { useTheme } from 'styled-components/native';
import { Loading, SCContent, SContainer } from 'src/components/style';
import { useSession } from 'src/context/auth';

export default function TabsLayout() {
  const { session, isLoading } = useSession();
  const theme = useTheme();

  if (isLoading) {
    return (
      <SContainer>
        <SCContent>
          <Loading />
        </SCContent>
      </SContainer>
    );
  }

  if (!session) {
    return <Redirect href="/launch/" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.color.primary.c600,
        tabBarInactiveTintColor: theme.color.gray.c600,
        tabBarStyle: {
          backgroundColor: theme.color.gray.c25,
        },
      }}
    />
  );
}
