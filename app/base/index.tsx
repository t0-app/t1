import BaseUI from 'screens/base';
import { useCharacterQuery } from 'data/hooks/characters';

export default function Base() {
  const id = '1';
  const { data: character, isLoading } = useCharacterQuery({ id });
  return <BaseUI character={character} isLoading={isLoading} />;
}
