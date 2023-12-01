import { SCContent, SContainer, Text } from 'src/components/style';
import { t } from 'src/config/i18n';

export interface ProfileUIProps {}

export default function ProfileUI() {
  return (
    <SContainer>
      <SCContent>
        <Text>{t('profile')}</Text>
      </SCContent>
    </SContainer>
  );
}
