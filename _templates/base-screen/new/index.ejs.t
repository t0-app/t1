---
to: app/<%= h.changeCase.paramCase(name) %>/index.tsx
---
import { router } from 'expo-router';
import { Card } from 'components/Card';
import { NavHeader } from 'components/NavHeader';
import { Loading, SContainer } from 'components/style';
import { useCharacterQuery } from 'data/hooks/characters';
import { Character } from 'data/model';
import t from 'config/i18n';

export interface <%= name %>UIProps {
  character?: Character;
  isLoading?: boolean;
  onGoBack: () => void;
}

export function <%= name %>UI({ character, isLoading, onGoBack }: <%= name %>UIProps) {
  return (
    <SContainer>
      <NavHeader path="<%= h.changeCase.paramCase(name) %>" name={t('<%= h.changeCase.paramCase(name) %>')} onGoBack={onGoBack} />
      {isLoading ?? !character ? (
        <Loading />
      ) : (
        <Card testID={`card-${character.id}`} character={character} />
      )}
    </SContainer>
  );
}

export default function <%= name %>() {
  const id = '1';
  //   const { id } = useLocalSearchParams<{ id: string }>();
  const { data: character, isLoading } = useCharacterQuery({ id });
  return <<%= name %>UI character={character} isLoading={isLoading} onGoBack={() => router.back()} />;
}
