import { FlatList } from 'react-native';
import EpisodeCell from 'src/components/EpisodeCell';
import { Loading, RefreshControl, SContainer } from 'src/components/style';
import { Episode } from 'src/data/model';

export interface EpisodesUIProps {
  episodes: Episode[];
  isLoading?: boolean;
  isFetching?: boolean;
  onRefresh: () => void;
  onSelectedEpisode: (episodeId: number) => void;
  onFetchMore: () => void;
}

export default function EpisodesUI({
  episodes,
  isLoading = false,
  isFetching = false,
  onRefresh,
  onSelectedEpisode,
  onFetchMore,
}: EpisodesUIProps) {
  const renderItem = ({ item: episode }: { item: Episode }) => {
    return (
      <EpisodeCell
        testID={`cell-${episode.id}`}
        episode={episode}
        onPress={() => onSelectedEpisode(episode.id)}
      />
    );
  };

  return (
    <SContainer>
      <FlatList
        data={episodes}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
        ListFooterComponent={isFetching ? <Loading /> : null}
        keyExtractor={(episode: Episode) => `c_${episode.id}`}
        onEndReachedThreshold={0.3}
        onEndReached={() => onFetchMore()}
      />
    </SContainer>
  );
}
