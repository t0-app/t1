import { NavHeader } from 'components/NavHeader';
import { SCContent, SContainer, Text } from 'components/style';
import t from 'config/i18n';

export interface LaunchUIProps {}

export function LaunchUI() {
  return (
    <SContainer>
      <NavHeader path="launch" />
      <SCContent>
        <Text>{t('launch')}</Text>
      </SCContent>
    </SContainer>
  );
}

export default function Launch() {
  return <LaunchUI />;
}
