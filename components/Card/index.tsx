import styled from 'styled-components/native';
import { Text } from 'components/style';
import { Character } from 'data/model';

const Container = styled.Pressable`
  flex-direction: row;
  padding: 16px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.gray.c400};
  align-items: center;
`;

const Image = styled.Image`
  width: 120px;
  height: 120px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.gray.c400};
`;

const Content = styled.View`
  flex: 1;
`;

export interface CardProp {
  testID?: string;
  character: Character;
  onPress?: () => void;
}

export function Card({ testID, character, onPress }: CardProp) {
  return (
    <Container testID={testID} onPress={onPress} disabled={!onPress}>
      <Content>
        <Text title>{character.name}</Text>
        <Text light>{`status: ${character.status}`}</Text>
        <Text light>{`species: ${character.species}`}</Text>
        <Text light>{`type: ${character.type}`}</Text>
        <Text light>{`origin: ${character.origin.name}`}</Text>
        <Text light>{`location: ${character.location.name}`}</Text>
      </Content>
      <Image source={{ uri: character.image }} />
    </Container>
  );
}