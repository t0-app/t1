import { FlatList } from 'react-native';
import Card from 'src/components/Card';
import EpisodeCell from 'src/components/EpisodeCell';
import { Loading, RefreshControl, SContainer, SHTitle, Text } from 'src/components/style';
import { t } from 'src/config/i18n';
import { Character, Episode } from 'src/data/model';

export interface CharacterUIProps {
  character?: Character;
  episodes?: Episode[];
  isLoading?: boolean;
  isLoadingEpisodes?: boolean;
  isFetching?: boolean;
  isFetchingEpisodes?: boolean;
  onGoBack: () => void;
  onRefresh: () => void;
}

export default function CharacterUI({
  character,
  episodes,
  isLoading = false,
  isLoadingEpisodes = false,
  isFetchingEpisodes = false,
  onRefresh,
}: CharacterUIProps) {
  const renderItem = ({ item: episode }: { item: Episode }) => {
    return <EpisodeCell testID={`cell-${episode.id}`} episode={episode} />;
  };

  const headerItem = () => {
    return (
      <SHTitle>
        <Text ttype="title">{t('episodes')}</Text>
      </SHTitle>
    );
  };

  return (
    <SContainer>
      {isLoading ?? !character ? (
        <Loading />
      ) : (
        <>
          <Card testID={`card-${character.id}`} character={character} />
          <FlatList
            data={episodes}
            renderItem={renderItem}
            refreshControl={<RefreshControl refreshing={isLoadingEpisodes} onRefresh={onRefresh} />}
            ListFooterComponent={isFetchingEpisodes ? <Loading /> : null}
            ListHeaderComponent={headerItem}
            keyExtractor={(episode: Episode) => `c_${episode.id}`}
          />
        </>
      )}
    </SContainer>
  );
}
