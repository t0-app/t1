import { MaterialIcons } from '@expo/vector-icons';
import styled, { useTheme } from 'styled-components/native';

export type IconName = keyof typeof MaterialIcons.glyphMap;

const Container = styled.Pressable``;

export interface ButtonIconProps {
  testID?: string;
  name: IconName;
  size?: number;
  color?: string;
  onPress?: () => void;
}

export function ButtonIcon({ testID, name, size = 24, color, onPress }: ButtonIconProps) {
  const theme = useTheme();
  const defaultColor = theme.color.gray.c900;
  return (
    <Container testID={testID} onPress={onPress} disabled={!onPress}>
      <MaterialIcons name={name} size={size} color={color ?? defaultColor} />
    </Container>
  );
}
