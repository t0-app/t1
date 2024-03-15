import { useState } from 'react';
import { router } from 'expo-router';
import { useCharactersQuery } from 'src/data/hooks/characters';
import CharactersUI from 'src/screens/characters';

export default function Characters() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [specie, setSpecie] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

  const { data, isLoading, isFetching, hasNextPage, fetchNextPage, refetch } = useCharactersQuery({
    vars: { name, type, specie, gender, status },
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
      onSearchType={setType}
      onSearchSpecie={setSpecie}
      onSearchGender={setGender}
      onSearchStatus={setStatus}
    />
  );
}
