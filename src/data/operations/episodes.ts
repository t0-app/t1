import { PaginatedResponse, axiosInstance } from '../api';
import { Episode } from '../model';

//getEpisodes
export interface EpisodesVars {
  page: number;
}

export type EpisodesData = PaginatedResponse<Episode>;

export async function getEpisodes({ page }: EpisodesVars): Promise<EpisodesData> {
  const { data } = await axiosInstance.get<EpisodesData>(`/episode/?page=${page}`);
  return data;
}

//getEpisode
export type EpisodeData = Episode;

export async function getEpisode(id: string): Promise<EpisodeData> {
  const { data } = await axiosInstance.get<EpisodeData>(`/episode/${id}`);
  return data;
}

//getMultipleEpisodes
export interface MultipleEpisodesVars {
  numbersKeys: string;
}

export type MultipleEpisodesData = Episode[];

export async function getMultipleEpisodes({
  numbersKeys,
}: MultipleEpisodesVars): Promise<MultipleEpisodesData> {
  const { data } = await axiosInstance.get<MultipleEpisodesData>(`/episode/${numbersKeys}`);
  return data;
}
