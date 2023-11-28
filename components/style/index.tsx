import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const SContainer = styled.SafeAreaView`
  flex: 1;
`;

export const SContent = styled.View`
  padding: 16px;
`;

interface IText {
  h1?: boolean;
  title?: boolean;
  body?: boolean;
  light?: boolean;
}

export const Text = styled.Text<IText>`
  ${({ h1, title }) => (h1 || title) && 'flex: 1;'}
  font-family: ${({ h1, title, light, theme }) =>
    light
      ? theme.fontFamily.inter.light
      : h1 ?? title
      ? theme.fontFamily.inter.bold
      : theme.fontFamily.inter.regular};
  color: ${({ theme }) => theme.color.gray.c900};
  font-size: ${({ h1, title, light }) => (light ? 11 : h1 ? 24 : title ? 20 : 14)}px;
`;

export const Loading = styled.ActivityIndicator``;

export const RefreshControl = styled.RefreshControl``;
