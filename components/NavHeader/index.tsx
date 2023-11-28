import styled from 'styled-components/native';
import { Text } from 'components/style';

const Container = styled.View`
  flex-direction: row;
  padding: 16px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.gray.c400};
  align-items: center;
`;

export interface NavHeaderProp {
  name: string;
  path?: string;
}

export function NavHeader({ name, path }: NavHeaderProp) {
  return (
    <Container>
      <Text h1>{name}</Text>
      <Text light>{`/${path}`}</Text>
    </Container>
  );
}
