import { ActivityIndicator, Text, View } from 'components/style';
import { useCharacterQuery } from 'data/hooks/characters';
import { Character } from 'data/model';
import t from 'config/i18n';

export interface BaseUIProp {
  character?: Character;
  isLoading?: boolean;
  errorMessage?: string;
}

export function BaseUI({ character, isLoading = false, errorMessage }: BaseUIProp) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{t('base')}</Text>
      <Text>{character?.name}</Text>
      {isLoading ? <ActivityIndicator /> : null}
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
}

export default function Base() {
  const { data: character, isLoading, error } = useCharacterQuery({ id: 1 });
  console.log({ error, character });
  return <BaseUI character={character} isLoading={isLoading} errorMessage={error?.message} />;
}
