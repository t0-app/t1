import { FlatList, RefreshControl } from 'react-native';
import Card from 'src/components/Card';
import EpisodeCell from 'src/components/EpisodeCell';
import Header from 'src/components/Header';
import { Loading, SContainer, SHTitle, Text } from 'src/components/style';
import { t } from 'src/config/i18n';
import { Character, Episode } from 'src/data/model';

export interface EpisodeUIProps {
  episode?: Episode;
  characters?: Character[];
  isLoading?: boolean;
  isLoadingCharacters?: boolean;
  isFetching?: boolean;
  isFetchingCharacters?: boolean;
  onGoBack: () => void;
  onRefresh: () => void;
  onSelectedCharacter: (characterId: number) => void;
}

export default function EpisodeUI({
  episode,
  characters,
  isLoading = false,
  isLoadingCharacters = false,
  isFetchingCharacters = false,
  onGoBack,
  onRefresh,
  onSelectedCharacter,
}: EpisodeUIProps) {
  const renderItem = ({ item: character }: { item: Character }) => {
    return (
      <Card
        testID={`card-${character.id}`}
        character={character}
        onPress={() => onSelectedCharacter(character.id)}
      />
    );
  };

  const headerItem = () => {
    return (
      <>
        {!!episode ? <EpisodeCell episode={episode} testID={`cell-${episode.id}`} /> : null}
        <SHTitle>
          <Text ttype="title">{t('characters')}</Text>
        </SHTitle>
      </>
    );
  };

  return (
    <SContainer>
      <Header name={episode?.name ?? ''} onGoBack={onGoBack} />
      {isLoading ?? !episode ? (
        <Loading />
      ) : (
        <FlatList
          data={characters}
          renderItem={renderItem}
          refreshControl={<RefreshControl refreshing={isLoadingCharacters} onRefresh={onRefresh} />}
          ListFooterComponent={isFetchingCharacters ? <Loading /> : null}
          ListHeaderComponent={headerItem}
          keyExtractor={(character: Character) => `c_${character.id}`}
        />
      )}
    </SContainer>
  );
}
