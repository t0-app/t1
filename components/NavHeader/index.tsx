import styled from 'styled-components/native';
import { Text } from 'components/style';

const Container = styled.View`
  flex-direction: row;
  padding: 16px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.gray.c400};
  align-items: center;
`;

const PathView = styled.View`
  position: absolute;
  bottom: 8px;
  right: 8px;
`;

export interface NavHeaderProps {
  name: string;
  path?: string;
  onGoBack?: () => void;
}

export function NavHeader({ name, path, onGoBack }: NavHeaderProps) {
  return (
    <Container>
      <Text ttype="h1">{name}</Text>
      <PathView>
        <Text ttype="light">{`/${path}`}</Text>
      </PathView>
    </Container>
  );
}
