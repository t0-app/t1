import styled from 'styled-components/native';
import { Text } from 'src/components/style';
import { Location } from 'src/data/model';

const Container = styled.Pressable`
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.gray.c400};
  padding: 16px;
`;

export interface LocationCellProps {
  testID?: string;
  location: Location;
  onPress?: () => void;
}

export default function LocationCell({ testID, location, onPress }: LocationCellProps) {
  return (
    <Container testID={testID} onPress={onPress}>
      <Text>#{location.id}</Text>
      <Text ttype="h2">{location.name}</Text>
      <Text>Type: {location.type}</Text>
      <Text>Dimension: {location.dimension}</Text>
    </Container>
  );
}
