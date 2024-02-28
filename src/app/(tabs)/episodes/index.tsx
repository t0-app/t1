import { router } from 'expo-router';
import { useEpisodesQuery } from 'src/data/hooks/episodes';
import EpisodesUI from 'src/screens/episodes';

export default function Episodes() {
  const { data, isLoading, isFetching, hasNextPage, fetchNextPage, refetch } = useEpisodesQuery({});

  const episodes =
    data?.pages.map((page) => page.results ?? []).reduce((arr, subarr) => arr.concat(subarr), []) ??
    [];

  return (
    <EpisodesUI
      episodes={episodes}
      isLoading={isLoading}
      isFetching={isFetching}
      onSelectedEpisode={(episodeId) => router.push(`/episodes/${episodeId}`)}
      onRefresh={() => refetch()}
      onFetchMore={() => {
        hasNextPage && fetchNextPage();
      }}
    />
  );
}
