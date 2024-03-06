import { PaginatedResponse, axiosInstance } from '../api';
import { Character } from '../model';

//getCharacters
export interface CharactersVars {
  page?: number;
  name?: string;
  type?: string;
  specie?: string;
  gender?: string;
  status?: string;
}

export type CharactersData = PaginatedResponse<Character>;

export async function getCharacters({
  page,
  name,
  type,
  specie,
  gender,
  status,
}: CharactersVars): Promise<CharactersData> {
  const { data } = await axiosInstance.get<CharactersData>(
    `/character/?page=${page}${name ? `&name=${name}` : ''}${type ? `&type=${type}` : ''}${
      gender ? `&gender=${gender}` : ''
    }${status ? `&status=${status}` : ''}${specie ? `&species=${specie}` : ''}`,
  );
  return data;
}

//getCharacter
export type CharacterData = Character;

export async function getCharacter(id: string): Promise<CharacterData> {
  const { data } = await axiosInstance.get<CharacterData>(`/character/${id}`);
  return data;
}
