import styled from 'styled-components/native';
import { Text } from 'components/style';

export const Container = styled.View`
  flex-direction: row;
  padding: 16px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.gray.c900};
  align-items: center;
`;

export interface NavHeaderProp {
  name: string;
  path?: string;
}

export function NavHeader({ name, path }: NavHeaderProp) {
  return (
    <Container>
      <Text f b>
        {name}
      </Text>
      <Text l s={12}>
        {`path: /${path}\nsource: /app/${path}`}
      </Text>
    </Container>
  );
}
