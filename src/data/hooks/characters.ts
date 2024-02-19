import { UseInfiniteQueryOptions, UseQueryOptions, useInfiniteQuery, useQuery } from 'react-query';
import { AxiosError } from 'axios';
import {
  CharacterData,
  CharactersData,
  CharactersVars,
  getCharacter,
  getCharacters,
} from '../operations/characters';

//useCharactersQuery
type CharactersQueryOptions = {
  vars: CharactersVars;
  options?: Omit<UseInfiniteQueryOptions<CharactersData, AxiosError>, 'queryKey' | 'queryFn'>;
};

export function useCharactersQuery({
  vars: { name, type, specie, status, gender },
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
}: CharactersQueryOptions) {
  return useInfiniteQuery(
    ['characters', name, type, specie, gender, status],
    ({ pageParam = 1 }) => getCharacters({ page: pageParam, name, type, specie, gender, status }),
    options,
  );
}

//useCharacterQuery
type CharacterQueryOptions = {
  id: string;
  options?: Omit<UseQueryOptions<CharacterData, AxiosError>, 'queryKey' | 'queryFn'>;
};

export function useCharacterQuery({ id, options = {} }: CharacterQueryOptions) {
  return useQuery(['character', [id]], () => getCharacter(id), options);
}
