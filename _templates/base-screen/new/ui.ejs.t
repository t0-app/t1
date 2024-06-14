---
to: src/screens/<%= h.changeCase.paramCase(name) %>/index.tsx
---
import Card from 'src/components/Card';
import Header from 'src/components/Header';
import { Loading, SContainer } from 'src/components/style';
import { t } from 'src/config/i18n';
import { Character } from 'src/data/model';

export interface <%= name %>UIProps {
  character?: Character;
  isLoading?: boolean;
}

export default function <%= name %>UI({ character, isLoading }: <%= name %>UIProps) {
  return (
    <SContainer>
      <Header name={t('<%= h.changeCase.paramCase(name) %')} />
      {isLoading ?? !character ? (
        <Loading />
      ) : (
        <Card testID={`card-${character.id}`} character={character} />
      )}
    </SContainer>
  );
}
