import styled, { useTheme } from 'styled-components/native';
import ButtonIcon, { IconName } from 'src/components/ButtonIcon';
import { Text } from 'src/components/style';

const Container = styled.Pressable`
  flex-direction: row;
  padding: 16px;
  gap: 8px;
  align-items: center;
`;

interface ButtonIconProps {
  name: IconName;
  onPress: () => void;
}

export interface HeaderProps {
  name: string;
  buttonIcons?: ButtonIconProps[];

  onGoBack?: () => void;
}

export default function Header({ name, buttonIcons, onGoBack }: HeaderProps) {
  const theme = useTheme();

  return (
    <Container>
      {onGoBack && <ButtonIcon name="chevron-left" color={theme.color.accent} onPress={onGoBack} />}
      <Text ttype="h1" flex>
        {name}
      </Text>
      {buttonIcons?.map((buttonIcon) => (
        <ButtonIcon name={buttonIcon.name} onPress={buttonIcon.onPress} />
      ))}
    </Container>
  );
}
