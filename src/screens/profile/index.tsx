import Header from 'src/components/Header';
import { SCContent, SContainer, Text } from 'src/components/style';
import { t } from 'src/config/i18n';

export interface ProfileUIProps {
  onStorybook: () => void;
  onLogout: () => void;
}

export default function ProfileUI({ onStorybook, onLogout }: ProfileUIProps) {
  return (
    <SContainer>
      <Header
        name={t('profile')}
        buttonIcons={[
          { name: 'list', onPress: onStorybook },
          { name: 'logout', onPress: onLogout },
        ]}
      />
      <SCContent>
        <Text>{t('profile')}</Text>
      </SCContent>
    </SContainer>
  );
}
