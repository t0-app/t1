import { router, useLocalSearchParams } from 'expo-router';
import { useEpisodeQuery } from 'src/data/hooks/episodes';
import EpisodeUI from 'src/screens/episode';

export default function EpisodeDetail() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const { data: episode, isLoading } = useEpisodeQuery({ id: id as string });
  return <EpisodeUI episode={episode} isLoading={isLoading} onGoBack={() => router.back()} />;
}
