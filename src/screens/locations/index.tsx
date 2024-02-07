import LocationCell from 'src/components/LocationCell';
import { Loading, SContainer } from 'src/components/style';
import { Location } from 'src/data/model';

export interface LocationsUIProps {
  locations: Location[];
  isLoading?: boolean;
}

export default function LocationsUI({ locations, isLoading }: LocationsUIProps) {
  return (
    <SContainer>
      {locations.map((location) => (
        <LocationCell location={location} />
      ))}
      {/* {isLoading ?? !character ? (
        <Loading />
      ) : (
        <Card testID={`card-${character.id}`} character={character} />
      )} */}
    </SContainer>
  );
}
