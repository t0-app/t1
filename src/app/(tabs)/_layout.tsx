import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useMediaQuery } from 'react-responsive';
import { Redirect, Tabs } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useTheme } from 'styled-components/native';
import Icon from 'src/components/Icon';
import { Loading, SCContent, SContainer } from 'src/components/style';
import { useSession } from 'src/context/auth';

export default function TabsLayout() {
  const { session, isLoading } = useSession();
  const theme = useTheme();

  const isLandscape = useMediaQuery({
    minWidth: 800,
  });

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

  if (isLandscape) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            headerShown: false,
            drawerType: 'permanent',
            drawerStyle: {
              width: 400,
              padding: 20,
            },
          }}>
          <Drawer.Screen
            name="characters"
            options={{ drawerIcon: ({ color }) => <Icon name="group" color={color} /> }}
          />
          <Drawer.Screen
            name="locations"
            options={{ drawerIcon: ({ color }) => <Icon name="map" color={color} /> }}
          />
          <Drawer.Screen
            name="episodes"
            options={{ drawerIcon: ({ color }) => <Icon name="movie" color={color} /> }}
          />
          <Drawer.Screen
            name="profile"
            options={{ drawerIcon: ({ color }) => <Icon name="person" color={color} /> }}
          />
        </Drawer>
      </GestureHandlerRootView>
    );
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.color.primary,
        tabBarInactiveTintColor: theme.color.low,
        tabBarStyle: {
          backgroundColor: theme.color.bg,
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
          tabBarIcon: ({ color }) => <Icon name="map" color={color} />,
        }}
      />
      <Tabs.Screen
        name="episodes"
        options={{
          href: '/episodes',
          tabBarIcon: ({ color }) => <Icon name="movie" color={color} />,
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
