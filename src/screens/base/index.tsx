import Card from 'src/components/Card';
import Header from 'src/components/Header';
import { Loading, SContainer } from 'src/components/style';
import { t } from 'src/config/i18n';
import { Character } from 'src/data/model';

export interface BaseUIProps {
  character?: Character;
  isLoading?: boolean;
}

export default function BaseUI({ character, isLoading }: BaseUIProps) {
  return (
    <SContainer>
      <Header name={t('base')} />
      {isLoading ?? !character ? (
        <Loading />
      ) : (
        <Card testID={`card-${character.id}`} character={character} />
      )}
    </SContainer>
  );
}
