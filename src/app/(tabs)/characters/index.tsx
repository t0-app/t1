import { router } from 'expo-router';
import { useCharactersQuery } from 'src/data/hooks/characters';
import CharactersUI from 'src/screens/characters';

export default function Characters() {
  const { data, isLoading, isFetching, fetchNextPage, refetch } = useCharactersQuery({});

  const characters =
    data?.pages.map((page) => page.results ?? []).reduce((arr, subarr) => arr.concat(subarr), []) ??
    [];

  return (
    <CharactersUI
      characters={characters}
      isLoading={isLoading}
      isFetching={isFetching}
      onSelectedCharacter={(characterId) => router.push(`/characters/${characterId}`)}
      onRefresh={() => refetch()}
      onFetchMore={() => {
        fetchNextPage();
      }}
    />
  );
}
