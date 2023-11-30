import { router, useLocalSearchParams } from 'expo-router';
import { useCharacterQuery } from 'src/data/hooks/characters';
import CharacterUI from 'src/screens/character';

export default function CharacterDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: character, isLoading } = useCharacterQuery({ id });
  return <CharacterUI character={character} isLoading={isLoading} onGoBack={() => router.back()} />;
}
