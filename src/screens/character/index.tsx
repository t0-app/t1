import { Card } from 'src/components/Card';
import { Loading, SContainer } from 'src/components/style';
import { Character } from 'src/data/model';

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
