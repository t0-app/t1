import { FlatList } from 'react-native';
import Card from 'src/components/Card';
import { Loading, RefreshControl, SContainer } from 'src/components/style';
import { Character } from 'src/data/model';

export interface CharactersUIProps {
  characters: Character[];
  isLoading?: boolean;
  isFetching?: boolean;
  onRefresh: () => void;
  onSelectedCharacter: (characterId: number) => void;
  onFetchMore: () => void;
}

export default function CharactersUI({
  characters,
  isLoading = false,
  isFetching = false,
  onRefresh,
  onSelectedCharacter,
  onFetchMore,
}: CharactersUIProps) {
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
      <FlatList
        data={characters}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
        ListFooterComponent={isFetching ? <Loading /> : null}
        keyExtractor={(character: Character) => `c_${character.id}`}
        onEndReachedThreshold={0.3}
        onEndReached={() => onFetchMore()}
      />
    </SContainer>
  );
}
