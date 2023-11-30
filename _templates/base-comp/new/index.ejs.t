---
to: components/<%= name %>/index.tsx
---
import styled from 'styled-components/native';
import { Text } from 'components/style';
import t from 'config/i18n';

const Container = styled.Pressable`
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.gray.c400};
  padding: 16px;
  align-items: center;
`;

export interface <%= name %>Props {
  text: string;
  onPress?: () => void;
}

export function <%= name %>({ text, onPress }: <%= name %>Props) {
  return (
    <Container onPress={onPress}>
      <Text ttype="h2">{t('<%= name %>')}</Text>
      <Text>{text}</Text>
    </Container>
  );
}
