import { router, useLocalSearchParams } from 'expo-router';
import { useCharacterQuery } from 'src/data/hooks/characters';
import { useMultipleEpisodesQuery } from 'src/data/hooks/episodes';
import CharacterUI from 'src/screens/character';

export default function CharacterDetail() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const { data: character, isLoading } = useCharacterQuery({ id: id as string });

  const {
    data: episodes,
    isLoading: isLoadingEpisodes,
    isFetching: isFetchingEpisodes,
    refetch,
  } = useMultipleEpisodesQuery({
    episodes: (character?.episode as string[]) || [],
    options: { enabled: !!character?.episode },
  });

  return (
    <CharacterUI
      character={character}
      episodes={episodes}
      isLoading={isLoading}
      isLoadingEpisodes={isLoadingEpisodes}
      isFetchingEpisodes={isFetchingEpisodes}
      onGoBack={() => router.back()}
      onRefresh={() => refetch()}
      onSelectedEpisode={(episodeId) => router.push(`/episodes/${episodeId}`)}
    />
  );
}
