import { FlatList } from 'react-native';
import Card from 'src/components/Card';
import EpisodeCell from 'src/components/EpisodeCell';
import Header from 'src/components/Header';
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
  onSelectedEpisode: (episodeId: number) => void;
}

export default function CharacterUI({
  character,
  episodes,
  isLoading = false,
  isLoadingEpisodes = false,
  isFetchingEpisodes = false,
  onGoBack,
  onRefresh,
  onSelectedEpisode,
}: CharacterUIProps) {
  const renderItem = ({ item: episode }: { item: Episode }) => {
    return (
      <EpisodeCell
        testID={`cell-${episode.id}`}
        episode={episode}
        onPress={() => onSelectedEpisode(episode.id)}
      />
    );
  };

  const headerItem = () => {
    return (
      <>
        {!!character ? <Card testID={`card-${character.id}`} character={character} /> : null}
        <SHTitle>
          <Text ttype="title">{t('episodes')}</Text>
        </SHTitle>
      </>
    );
  };

  return (
    <SContainer>
      <Header name={character?.name ?? ''} onGoBack={onGoBack} />
      {isLoading ?? !character ? (
        <Loading />
      ) : (
        <FlatList
          data={episodes}
          renderItem={renderItem}
          refreshControl={<RefreshControl refreshing={isLoadingEpisodes} onRefresh={onRefresh} />}
          ListFooterComponent={isFetchingEpisodes ? <Loading /> : null}
          ListHeaderComponent={headerItem}
          keyExtractor={(episode: Episode) => `c_${episode.id}`}
        />
      )}
    </SContainer>
  );
}
