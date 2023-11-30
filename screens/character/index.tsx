import { Card } from 'components/Card';
import { Loading, SContainer } from 'components/style';
import { Character } from 'data/model';

export interface CharacterUIProps {
  character?: Character;
  isLoading?: boolean;
  onGoBack: () => void;
}

export default function CharacterUI({ character, isLoading, onGoBack }: CharacterUIProps) {
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
