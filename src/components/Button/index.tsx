import styled from 'styled-components/native';
import { Text } from 'src/components/style';

type ButtonType = 'default' | 'outline';

interface IContainer {
  type: ButtonType;
}

const Container = styled.Pressable<IContainer>`
  background-color: ${({ type, theme }) =>
    type === 'default' ? theme.color.gray.c900 : theme.color.gray.c0};
  border-color: ${({ theme }) => theme.color.gray.c900};
  border-width: 2px;
  border-radius: 32px;
  padding: 8px 16px;
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
      <Text ttype="title" light={type === 'default'}>
        {text}
      </Text>
    </Container>
  );
}
