import styled from 'styled-components/native';
import Icon, { IconName } from 'src/components/Icon';

export { IconName } from 'src/components/Icon';

const Container = styled.Pressable``;

export interface ButtonIconProps {
  testID?: string;
  name: IconName;
  size?: number;
  color?: string;
  onPress?: () => void;
}

export default function ButtonIcon({ testID, name, size = 24, color, onPress }: ButtonIconProps) {
  return (
    <Container testID={testID} onPress={onPress} disabled={!onPress}>
      <Icon name={name} size={size} color={color} />
    </Container>
  );
}
