import styled from 'styled-components/native';
import { Text } from 'src/components/style';
import { t } from 'src/config/i18n';
import { Location } from 'src/data/model';

const Container = styled.Pressable`
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.gray.c400};
  padding: 16px;
`;

export interface LocationCellProps {
  location: Location;
  onPress?: () => void;
}

export default function LocationCell({ location, onPress }: LocationCellProps) {
  return (
    <Container onPress={onPress}>
      <Text ttype="h2">{location.name}</Text>
      <Text>{location.type}</Text>
      <Text>{location.dimension}</Text>
    </Container>
  );
}
