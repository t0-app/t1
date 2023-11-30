---
to: screens/<%= h.changeCase.paramCase(name) %>/index.tsx
---
import { Card } from 'components/Card';
import { Loading, SContainer } from 'components/style';
import { Character } from 'data/model';

export interface <%= name %>UIProps {
  character?: Character;
  isLoading?: boolean;
}

export default function <%= name %>UI({ character, isLoading }: <%= name %>UIProps) {
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
