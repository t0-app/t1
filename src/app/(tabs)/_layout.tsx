import { Redirect, Tabs } from 'expo-router';
import { useTheme } from 'styled-components/native';
import Icon from 'src/components/Icon';
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
      }}>
      <Tabs.Screen
        name="characters"
        options={{
          href: '/characters',
          tabBarIcon: ({ color }) => <Icon name="group" color={color} />,
        }}
      />
      <Tabs.Screen
        name="locations"
        options={{
          href: '/locations',
          tabBarIcon: ({ color }) => <Icon name="group" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          href: {
            pathname: '/profile',
          },
          tabBarIcon: ({ color }) => <Icon name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
