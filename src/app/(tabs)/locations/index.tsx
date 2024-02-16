import { router } from 'expo-router';
import { useLocationsQuery } from 'src/data/hooks/locations';
import LocationsUI from 'src/screens/locations';

export default function Locations() {
  const { data, isLoading, isFetching, fetchNextPage, refetch } = useLocationsQuery({});

  const locations =
    data?.pages.map((page) => page.results ?? []).reduce((arr, subarr) => arr.concat(subarr), []) ??
    [];

  return (
    <LocationsUI
      locations={locations}
      isLoading={isLoading}
      isFetching={isFetching}
      onSelectedLocation={(locationId) => router.push(`/locations/${locationId}`)}
      onRefresh={() => refetch()}
      onFetchMore={() => {
        fetchNextPage();
      }}
    />
  );
}
