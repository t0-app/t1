---
to: src/screens/<%= h.changeCase.paramCase(name) %>/index.tsx
---
import Card from 'src/components/Card';
import { Loading, SContainer } from 'src/components/style';
import { Character } from 'src/data/model';

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
