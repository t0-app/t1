import { useState } from 'react';
import { router } from 'expo-router';
import { useCharactersQuery } from 'src/data/hooks/characters';
import CharactersUI from 'src/screens/characters';

export default function Characters() {
  const [name, setName] = useState('');

  const { data, isLoading, isFetching, hasNextPage, fetchNextPage, refetch } = useCharactersQuery({
    vars: { name },
  });

  const characters =
    data?.pages.map((page) => page.results ?? []).reduce((arr, subarr) => arr.concat(subarr), []) ??
    [];

  return (
    <CharactersUI
      name={name}
      characters={characters}
      isLoading={isLoading}
      isFetching={isFetching}
      onSelectedCharacter={(characterId) => router.push(`/characters/${characterId}`)}
      onRefresh={() => refetch()}
      onFetchMore={() => {
        hasNextPage && fetchNextPage();
      }}
      onSearchName={setName}
    />
  );
}
