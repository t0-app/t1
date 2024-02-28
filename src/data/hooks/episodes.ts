import { UseInfiniteQueryOptions, UseQueryOptions, useInfiniteQuery, useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { EpisodeData, EpisodesData, getEpisode, getEpisodes } from '../operations/episodes';

//useEpisodesQuery
type EpisodesQueryOptions = {
  options?: Omit<UseInfiniteQueryOptions<EpisodesData, AxiosError>, 'queryKey' | 'queryFn'>;
};

export function useEpisodesQuery({
  options = {
    getNextPageParam: (lastPage) => {
      const nextUrl = lastPage.info.next;
      if (nextUrl) {
        const regex = /page=(\d+)/;
        const match = nextUrl.match(regex);
        //console.log(match);
        if (match) return Number(match[1]);
      }
      return false;
    },
  },
}: EpisodesQueryOptions) {
  return useInfiniteQuery(
    ['episodes'],
    ({ pageParam = 1 }) => getEpisodes({ page: pageParam }),
    options,
  );
}

//useEpisodeQuery
type EpisodeQueryOptions = {
  id: string;
  options?: Omit<UseQueryOptions<EpisodeData, AxiosError>, 'queryKey' | 'queryFn'>;
};

export function useEpisodeQuery({ id, options = {} }: EpisodeQueryOptions) {
  return useQuery(['episode', [id]], () => getEpisode(id), options);
}
