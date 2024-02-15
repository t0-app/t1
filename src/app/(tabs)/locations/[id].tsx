import { router, useLocalSearchParams } from 'expo-router';
import { useLocationQuery } from 'src/data/hooks/locations';
import LocationUI from 'src/screens/location';

export default function LocationDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: location, isLoading } = useLocationQuery({ id });
  return <LocationUI location={location} isLoading={isLoading} onGoBack={() => router.back()} />;
}
