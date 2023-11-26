import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const SContainer = styled.SafeAreaView`
  flex: 1;
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.gray.c500};
`;

export const SContent = styled.View`
  padding: 16px;
`;

export const Text = styled.Text<{ f?: boolean; l?: boolean; b?: boolean; s?: number }>`
  ${({ f }) => f && 'flex: 1;'}
  font-family: ${({ l, b, theme }) =>
    l
      ? theme.fontFamily.inter.light
      : b
      ? theme.fontFamily.inter.bold
      : theme.fontFamily.inter.regular};
  color: ${({ theme }) => theme.color.gray.c900};
  font-size: ${({ s = 16 }) => s}px;
`;
