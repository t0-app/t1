import { router, useLocalSearchParams } from 'expo-router';
import CharacterUI from 'screens/character';
import { useCharacterQuery } from 'data/hooks/characters';

export default function CharacterDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: character, isLoading } = useCharacterQuery({ id });
  return <CharacterUI character={character} isLoading={isLoading} onGoBack={() => router.back()} />;
}
