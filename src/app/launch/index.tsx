import { router } from 'expo-router';
import { useSession } from 'src/context/auth';
import LaunchUI from 'src/screens/launch';

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
