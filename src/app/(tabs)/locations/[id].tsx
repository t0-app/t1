import { router, useLocalSearchParams } from 'expo-router';
import { useMultipleCharactersQuery } from 'src/data/hooks/characters';
import { useLocationQuery } from 'src/data/hooks/locations';
import LocationUI from 'src/screens/location';

export default function LocationDetail() {
  const { id } = useLocalSearchParams<{ id?: string }>();

  const { data: location, isLoading } = useLocationQuery({ id: id as string });

  const {
    data: characters,
    isLoading: isLoadingResidents,
    isFetching: isFetchingResidents,
    refetch,
  } = useMultipleCharactersQuery({
    characters: (location?.residents as string[]) || [],
    options: { enabled: !!location?.residents },
  });

  return (
    <LocationUI
      location={location}
      residents={characters}
      isLoading={isLoading}
      isLoadingResidents={isLoadingResidents}
      isFetchingResidents={isFetchingResidents}
      onGoBack={() => router.back}
      onRefresh={() => refetch()}
    />
  );
}
