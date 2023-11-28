import { PaginatedResponse, axiosInstance } from '../api';
import { Character } from '../model';

//getCharacters
export interface CharactersVars {
  page: number;
}

export type CharactersData = PaginatedResponse<Character>;

export async function getCharacters({ page }: CharactersVars): Promise<CharactersData> {
  const { data } = await axiosInstance.get<CharactersData>(`/character/?page=${page}`);
  return data;
}

//getCharacter
export type CharacterData = Character;

export async function getCharacter(id: string): Promise<CharacterData> {
  const { data } = await axiosInstance.get<CharacterData>(`/character/${id}`);
  return data;
}
