import { UseInfiniteQueryOptions, UseQueryOptions, useInfiniteQuery, useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { LocationData, LocationsData, getLocation, getLocations } from '../operations/locations';

//useLocationsQuery
type LocationsQueryOptions = {
  options?: Omit<UseInfiniteQueryOptions<LocationsData, AxiosError>, 'queryKey' | 'queryFn'>;
};

export function useLocationsQuery({
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
}: LocationsQueryOptions) {
  return useInfiniteQuery(
    ['locations'],
    ({ pageParam = 1 }) => getLocations({ page: pageParam }),
    options,
  );
}

//useLocationQuery
type LocationQueryOptions = {
  id: string;
  options?: Omit<UseQueryOptions<LocationData, AxiosError>, 'queryKey' | 'queryFn'>;
};

export function useLocationQuery({ id, options = {} }: LocationQueryOptions) {
  return useQuery(['location', [id]], () => getLocation(id), options);
}
