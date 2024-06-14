---
to: src/components/<%= name %>/index.tsx
---
import styled from 'styled-components/native';
import { Text } from 'src/components/style';
import { t } from 'src/config/i18n';

const Container = styled.Pressable`
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.border};
  padding: 16px;
  align-items: center;
`;

export interface <%= name %>Props {
  text: string;
  onPress?: () => void;
}

export default function <%= name %>({ text, onPress }: <%= name %>Props) {
  return (
    <Container onPress={onPress}>
      <Text ttype="h2">{t('<%= name %>')}</Text>
      <Text>{text}</Text>
    </Container>
  );
}
