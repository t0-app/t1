import { FlatList } from 'react-native';
import { Link, router } from 'expo-router';
import { Card } from 'components/Card';
import { NavHeader } from 'components/NavHeader';
import { Loading, RefreshControl, SContainer, SContent } from 'components/style';
import { useCharactersQuery } from 'data/hooks/characters';
import { Character } from 'data/model';
import t from 'config/i18n';

export interface CharactersUIProp {
  characters: Character[];
  isLoading?: boolean;
  isFetching?: boolean;
  onRefresh: () => void;
  onSelectedCharacter: (characterId: number) => void;
  onFetchMore: () => void;
}

export function CharactersUI({
  characters,
  isLoading = false,
  isFetching = false,
  onRefresh,
  onSelectedCharacter,
  onFetchMore,
}: CharactersUIProp) {
  const renderItem = ({ item: character }: { item: Character }) => {
    return (
      <Card
        testID={`card-${character.id}`}
        character={character}
        onPress={() => onSelectedCharacter(character.id)}
      />
    );
  };

  return (
    <SContainer>
      <NavHeader path="characters" name={t('characters')} />
      <FlatList
        data={characters}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
        ListFooterComponent={isFetching ? <Loading /> : null}
        keyExtractor={(character: Character) => `c_${character.id}`}
        onEndReachedThreshold={0.3}
        onEndReached={() => onFetchMore()}
      />
      <SContent>
        <Link href="/" style={{ color: 'blue' }}>
          /
        </Link>
      </SContent>
    </SContainer>
  );
}

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
