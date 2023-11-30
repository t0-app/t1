import { useSession } from 'context/auth';
import { router } from 'expo-router';
import LaunchUI from 'screens/launch';

export default function Launch() {
  const { signIn } = useSession();
  return (
    <LaunchUI
      onSignIn={() => {
        signIn();
        router.replace('/characters/');
      }}
    />
  );
}
