import { UseInfiniteQueryOptions, UseQueryOptions, useInfiniteQuery, useQuery } from 'react-query';
import { AxiosError } from 'axios';
import {
  CharacterData,
  CharactersData,
  getCharacter,
  getCharacters,
} from '../operations/characters';

//useCharactersQuery
type CharactersQueryOptions = {
  options?: Omit<UseInfiniteQueryOptions<CharactersData, AxiosError>, 'queryKey' | 'queryFn'>;
};

export function useCharactersQuery({
  options = {
    getNextPageParam: (lastPage) => {
      const nextUrl = lastPage.info.next;
      if (nextUrl) {
        return Number(nextUrl.charAt(nextUrl.length - 1));
      }
      return false;
    },
  },
}: CharactersQueryOptions) {
  return useInfiniteQuery(
    ['characters'],
    ({ pageParam = 1 }) => getCharacters({ page: pageParam }),
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
