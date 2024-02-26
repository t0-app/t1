import styled from 'styled-components/native';
import { Text } from 'src/components/style';
import { t } from 'src/config/i18n';
import { Episode } from 'src/data/model';

const Container = styled.Pressable`
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.border};
  padding: 16px;
  background-color: ${({ theme }) => theme.color.bg};
`;

export interface EpisodeCellProps {
  testID?: string;
  episode: Episode;
  onPress?: () => void;
}

export default function EpisodeCell({ episode, testID, onPress }: EpisodeCellProps) {
  return (
    <Container testID={testID} onPress={onPress}>
      <Text>#{episode.id}</Text>
      <Text ttype="h1">{episode.name}</Text>
      <Text ttype="title">{episode.episode}</Text>
      <Text>{episode.air_date}</Text>
    </Container>
  );
}
