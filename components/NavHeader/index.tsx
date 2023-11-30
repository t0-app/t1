import styled from 'styled-components/native';
import { ButtonIcon } from 'components/ButtonIcon';
import { Text } from 'components/style';

const ActionView = styled.View`
  width: 32px;
`;

const Container = styled.View`
  flex-direction: row;
  height: 48px;
  padding: 8px;
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
  name?: string;
  path?: string;
  onGoBack?: () => void;
}

export function NavHeader({ name = '', path, onGoBack }: NavHeaderProps) {
  return (
    <Container>
      <ActionView>
        {!!onGoBack && (
          <ButtonIcon testID="nav-button-back" name="chevron-left" onPress={onGoBack} />
        )}
      </ActionView>
      <Text ttype="h1" center>
        {name}
      </Text>
      <ActionView />
      <PathView>
        <Text ttype="light">{`/${path}`}</Text>
      </PathView>
    </Container>
  );
}
