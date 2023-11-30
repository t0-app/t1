import { router } from 'expo-router';
import { Card } from 'components/Card';
import { NavHeader } from 'components/NavHeader';
import { Loading, SContainer } from 'components/style';
import { useCharacterQuery } from 'data/hooks/characters';
import { Character } from 'data/model';
import t from 'config/i18n';

export interface BaseUIProps {
  character?: Character;
  isLoading?: boolean;
  onGoBack: () => void;
}

export function BaseUI({ character, isLoading, onGoBack }: BaseUIProps) {
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

export default function Base() {
  const id = '1';
  //   const { id } = useLocalSearchParams<{ id: string }>();
  const { data: character, isLoading } = useCharacterQuery({ id });
  return <BaseUI character={character} isLoading={isLoading} onGoBack={() => router.back()} />;
}
