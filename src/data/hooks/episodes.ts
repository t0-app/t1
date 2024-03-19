import { UseInfiniteQueryOptions, UseQueryOptions, useInfiniteQuery, useQuery } from 'react-query';
import { AxiosError } from 'axios';
import {
  EpisodeData,
  EpisodesData,
  MultipleEpisodesData,
  getEpisode,
  getEpisodes,
  getMultipleEpisodes,
} from '../operations/episodes';

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

//useMultipleEpisodesQuery
type MultipleEpisodesQueryOptions = {
  episodes: string[];
  options?: Omit<UseQueryOptions<MultipleEpisodesData, AxiosError>, 'queryKey' | 'queryFn'>;
};

export function useMultipleEpisodesQuery({ episodes, options }: MultipleEpisodesQueryOptions) {
  const numbers: number[] = episodes.map((episode) => {
    const numberSplit = episode.split('/');
    const episodeNumber = numberSplit[numberSplit.length - 1];
    return parseInt(episodeNumber, 10);
  });

  if (numbers.length > 0) {
    numbers.push(0);
  }

  const numbersKeys: string = numbers.join(',');
  return useQuery(['episodes', numbersKeys], () => getMultipleEpisodes({ numbersKeys }), options);
}
