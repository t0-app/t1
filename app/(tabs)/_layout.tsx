import { useSession } from 'context/auth';
import { Redirect, Tabs } from 'expo-router';
import { Loading, SCContent, SContainer } from 'components/style';

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
