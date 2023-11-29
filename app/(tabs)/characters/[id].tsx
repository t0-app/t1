import { Link, useLocalSearchParams } from 'expo-router';
import { Card } from 'components/Card';
import { NavHeader } from 'components/NavHeader';
import { Loading, SContainer, SContent } from 'components/style';
import { useCharacterQuery } from 'data/hooks/characters';
import { Character } from 'data/model';
import t from 'config/i18n';

export interface CharacterUIProp {
  character?: Character;
  isLoading?: boolean;
}

export function CharacterUI({ character, isLoading }: CharacterUIProp) {
  return (
    <SContainer>
      <NavHeader path="character" name={t('character')} />
      {isLoading ?? !character ? (
        <Loading />
      ) : (
        <Card testID={`card-${character.id}`} character={character} />
      )}
      <SContent>
        <Link href="/" style={{ color: 'blue' }}>
          /
        </Link>
      </SContent>
    </SContainer>
  );
}

export default function CharacterDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: character, isLoading } = useCharacterQuery({ id });
  return <CharacterUI character={character} isLoading={isLoading} />;
}
