import { Link } from 'expo-router';
import { NavHeader } from 'components/NavHeader';
import { SContainer, SContent } from 'components/style';
import t from 'config/i18n';

export interface BaseUIProp {}

export function BaseUI({}: BaseUIProp) {
  return (
    <SContainer>
      <NavHeader path="base" name={t('base')} />
      <SContent>
        <Link href="/" style={{ color: 'blue' }}>
          /
        </Link>
      </SContent>
    </SContainer>
  );
}

export default function Base() {
  return <BaseUI />;
}
