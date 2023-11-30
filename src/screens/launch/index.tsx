import { Button } from 'src/components/Button';
import { SCContent, SContainer, Text } from 'src/components/style';
import t from 'src/config/i18n';

export interface LaunchUIProps {
  onSignIn: () => void;
}

export default function LaunchUI({ onSignIn }: LaunchUIProps) {
  return (
    <SContainer>
      <SCContent>
        <Text>{t('launch')}</Text>
        <Button text={t('login')} onPress={onSignIn} />
      </SCContent>
    </SContainer>
  );
}
