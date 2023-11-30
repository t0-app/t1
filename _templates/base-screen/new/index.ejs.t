---
to: src/app/<%= h.changeCase.paramCase(name) %>/index.tsx
---
import { useCharacterQuery } from 'src/data/hooks/characters';
import <%= name %>UI from 'src/screens/<%= h.changeCase.paramCase(name) %>';

export default function <%= name %>() {
  const id = '1';
  const { data: character, isLoading } = useCharacterQuery({ id });
  return <<%= name %>UI character={character} isLoading={isLoading} />;
}
