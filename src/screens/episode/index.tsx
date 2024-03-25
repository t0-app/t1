import { FlatList, RefreshControl } from 'react-native';
import Card from 'src/components/Card';
import EpisodeCell from 'src/components/EpisodeCell';
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
}

export default function EpisodeUI({
  episode,
  characters,
  isLoading = false,
  isLoadingCharacters = false,
  isFetchingCharacters = false,
  onRefresh,
}: EpisodeUIProps) {
  const renderItem = ({ item: character }: { item: Character }) => {
    return <Card testID={`card-${character.id}`} character={character} />;
  };

  const headerItem = () => {
    return (
      <SHTitle>
        <Text ttype="title">{t('characters')}</Text>
      </SHTitle>
    );
  };

  return (
    <SContainer>
      {isLoading ?? !episode ? (
        <Loading />
      ) : (
        <>
          <EpisodeCell episode={episode} testID={`cell-${episode.id}`} />
          <FlatList
            data={characters}
            renderItem={renderItem}
            refreshControl={
              <RefreshControl refreshing={isLoadingCharacters} onRefresh={onRefresh} />
            }
            ListFooterComponent={isFetchingCharacters ? <Loading /> : null}
            ListHeaderComponent={headerItem}
            keyExtractor={(character: Character) => `c_${character.id}`}
          />
        </>
      )}
    </SContainer>
  );
}
