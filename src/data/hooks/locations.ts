import { UseInfiniteQueryOptions, useInfiniteQuery } from 'react-query';
import { AxiosError } from 'axios';
import { LocationsData, getLocations } from '../operations/locations';

//useLocationsQuery
type LocationsQueryOptions = {
  options?: Omit<UseInfiniteQueryOptions<LocationsData, AxiosError>, 'queryKey' | 'queryFn'>;
};

export function useLocationsQuery({
  options = {
    getNextPageParam: (lastPage) => {
      const nextUrl = lastPage.info.next;
      if (nextUrl) {
        return Number(nextUrl.charAt(nextUrl.length - 1));
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
