import { router } from 'expo-router';
import { useSession } from 'src/context/auth';
import ProfileUI from 'src/screens/profile';

export default function Profile() {
  const { signOut } = useSession();

  return (
    <ProfileUI
      onStorybook={() => {
        router.replace('/_storybook/');
      }}
      onLogout={() => {
        signOut();
        router.replace('/');
      }}
    />
  );
}
