import { useCharacterQuery } from 'src/data/hooks/characters';
import { useLocationsQuery } from 'src/data/hooks/locations';
import LocationsUI from 'src/screens/locations';

export default function Locations() {
  const { data, isLoading } = useLocationsQuery({});
  const locations = data?.pages?.[0]?.results || [];
  return <LocationsUI locations={locations} isLoading={isLoading} />;
}
