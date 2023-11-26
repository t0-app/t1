import { Link } from 'expo-router';
import { NavHeader } from 'components/NavHeader';
import { SContainer, SContent } from 'components/style';
import t from 'config/i18n';

export interface LaunchUIProp {}

export function LaunchUI({}: LaunchUIProp) {
  return (
    <SContainer>
      <NavHeader path="launch" name={t('launch')} />
      <SContent>
        <Link href="/base/" style={{ color: 'blue' }}>
          /base
        </Link>
      </SContent>
    </SContainer>
  );
}

export default function Launch() {
  return <LaunchUI />;
}
