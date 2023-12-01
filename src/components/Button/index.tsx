import styled from 'styled-components/native';
import { Text } from 'src/components/style';

type ButtonType = 'default' | 'outline' | 'text';

interface IContainer {
  type: ButtonType;
}

const Container = styled.Pressable<IContainer>`
  background-color: ${({ type, theme }) =>
    type === 'default' ? theme.color.gray.c900 : theme.color.gray.c0};
  border-color: ${({ theme }) => theme.color.gray.c900};
  border-width: ${({ type }) => (type === 'text' ? 0 : 2)}px;
  border-radius: 32px;
  padding: 6px 12px;
  align-items: center;
`;

export interface ButtonProps {
  text: string;
  type?: ButtonType;
  onPress?: () => void;
}

export function Button({ text, type = 'default', onPress }: ButtonProps) {
  return (
    <Container onPress={onPress} type={type}>
      <Text ttype="title" light={type === 'default'} underline={type === 'text'}>
        {text}
      </Text>
    </Container>
  );
}
