import { useCharacterQuery } from 'src/data/hooks/characters';
import BaseUI from 'src/screens/base';

export default function Base() {
  const id = '1';
  const { data: character, isLoading } = useCharacterQuery({ id });
  return <BaseUI character={character} isLoading={isLoading} />;
}
