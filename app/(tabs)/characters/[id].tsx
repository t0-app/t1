import { router, useLocalSearchParams } from 'expo-router';
import { Card } from 'components/Card';
import { NavHeader } from 'components/NavHeader';
import { Loading, SContainer } from 'components/style';
import { useCharacterQuery } from 'data/hooks/characters';
import { Character } from 'data/model';
import t from 'config/i18n';

export interface CharacterUIProps {
  character?: Character;
  isLoading?: boolean;
  onGoBack: () => void;
}

export function CharacterUI({ character, isLoading, onGoBack }: CharacterUIProps) {
  return (
    <SContainer>
      <NavHeader path="character" name={t('character')} onGoBack={onGoBack} />
      {isLoading ?? !character ? (
        <Loading />
      ) : (
        <Card testID={`card-${character.id}`} character={character} />
      )}
    </SContainer>
  );
}

export default function CharacterDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: character, isLoading } = useCharacterQuery({ id });
  return <CharacterUI character={character} isLoading={isLoading} onGoBack={() => router.back()} />;
}
