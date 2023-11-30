import { Redirect, Tabs } from 'expo-router';
import { Loading, SCContent, SContainer } from 'src/components/style';
import { useSession } from 'src/context/auth';

export default function TabsLayout() {
  const { session, isLoading } = useSession();

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

  return <Tabs screenOptions={{ headerShown: false }} />;
}
