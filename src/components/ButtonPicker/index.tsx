import styled from 'styled-components/native';
import { Text } from 'src/components/style';

type ButtonType = 'selected' | 'unselected';

interface IContainer {
  type: ButtonType;
  first?: boolean;
  last?: boolean;
}

const Container = styled.Pressable<IContainer>`
  background-color: ${({ type, theme }) =>
    type === 'selected' ? theme.color.high : theme.color.bg};
  border: 1px solid ${({ theme }) => theme.color.high};
  color: ${({ type, theme }) => (type === 'selected' ? theme.color.high : theme.color.bg)};
  padding: 6px 12px;
  align-items: center;
  border-top-left-radius: ${({ first }) => (first ? '6' : '0')}px;
  border-top-right-radius: ${({ last }) => (last ? '6' : '0')}px;
  border-bottom-left-radius: ${({ first }) => (first ? '6' : '0')}px;
  border-bottom-right-radius: ${({ last }) => (last ? '6' : '0')}px;
  witdh: 120px;
  height: 40px;
  text-align: center;
`;

export interface ButtonPickerProps {
  testID?: string;
  text: string;
  type?: ButtonType;
  first?: boolean;
  last?: boolean;
  onPress?: () => void;
}

export default function ButtonPicker({
  text,
  type = 'selected',
  last,
  first,
  onPress,
}: ButtonPickerProps) {
  return (
    <Container onPress={onPress} type={type} first={first} last={last}>
      <Text ttype="title" light={type === 'selected'}>
        {text}
      </Text>
    </Container>
  );
}
