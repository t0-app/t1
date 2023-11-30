---
to: app/<%= h.changeCase.paramCase(name) %>/index.tsx
---
import <%= name %>UI from 'screens/<%= h.changeCase.paramCase(name) %>';
import { useCharacterQuery } from 'data/hooks/characters';

export default function <%= name %>() {
  const id = '1';
  const { data: character, isLoading } = useCharacterQuery({ id });
  return <<%= name %>UI character={character} isLoading={isLoading} />;
}
