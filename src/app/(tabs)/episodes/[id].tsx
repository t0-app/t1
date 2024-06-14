import { router, useLocalSearchParams } from 'expo-router';
import { useMultipleCharactersQuery } from 'src/data/hooks/characters';
import { useEpisodeQuery } from 'src/data/hooks/episodes';
import EpisodeUI from 'src/screens/episode';

export default function EpisodeDetail() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const { data: episode, isLoading } = useEpisodeQuery({ id: id as string });

  const {
    data: characters,
    isLoading: isLoadingCharacters,
    isFetching: isFetchingCharacters,
    refetch,
  } = useMultipleCharactersQuery({
    characters: (episode?.characters as string[]) || [],
    options: { enabled: !!episode?.characters },
  });

  return (
    <EpisodeUI
      episode={episode}
      characters={characters}
      isLoading={isLoading}
      isLoadingCharacters={isLoadingCharacters}
      isFetchingCharacters={isFetchingCharacters}
      onGoBack={() => router.back()}
      onRefresh={() => refetch()}
      onSelectedCharacter={(characterId) => router.push(`/characters/${characterId}`)}
    />
  );
}
