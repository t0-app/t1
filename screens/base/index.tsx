import { Card } from 'components/Card';
import { Loading, SContainer } from 'components/style';
import { Character } from 'data/model';

export interface BaseUIProps {
  character?: Character;
  isLoading?: boolean;
}

export default function BaseUI({ character, isLoading }: BaseUIProps) {
  return (
    <SContainer>
      {isLoading ?? !character ? (
        <Loading />
      ) : (
        <Card testID={`card-${character.id}`} character={character} />
      )}
    </SContainer>
  );
}
