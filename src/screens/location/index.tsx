import LocationCell from 'src/components/LocationCell';
import { Loading, SContainer } from 'src/components/style';
import { Location } from 'src/data/model';

export interface LocationUIProps {
  location?: Location;
  isLoading?: boolean;
  onGoBack: () => void;
}

export default function LocationUI({ location, isLoading, onGoBack }: LocationUIProps) {
  return (
    <SContainer>
      {isLoading ?? !location ? (
        <Loading />
      ) : (
        <LocationCell testID={`cell-${location.id}`} location={location} />
      )}
    </SContainer>
  );
}
