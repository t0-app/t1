import styled, { DefaultTheme } from 'styled-components/native';

export const SContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.color.gray.c0};
`;

export const SContent = styled.View`
  padding: 16px;
`;

export const SCContent = styled.View`
  flex: 1;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export type TType = 'h1' | 'h2' | 'title' | 'body' | 'light';

export interface TextProps {
  ttype?: TType;
  center?: boolean;
  light?: boolean;
  underline?: boolean;
}

const getFontFamily = (ttype: TType, theme: DefaultTheme): string => {
  const fontFamilyMap: { [key in TType]: string } = {
    h1: theme.fontFamily.inter.bold,
    h2: theme.fontFamily.inter.bold,
    title: theme.fontFamily.inter.bold,
    body: theme.fontFamily.inter.regular,
    light: theme.fontFamily.inter.light,
  };
  return fontFamilyMap[ttype];
};

export const getFontSize = (ttype: TType): string => {
  const fontFamilyMap: { [key in TType]: string } = {
    h1: '24px',
    h2: '20px',
    title: '18px',
    body: '14px',
    light: '12px',
  };
  return fontFamilyMap[ttype];
};

export const Text = styled.Text<TextProps>`
  font-family: ${({ ttype = 'body', theme }) => getFontFamily(ttype, theme)};
  color: ${({ light, theme }) => (light ? theme.color.gray.c50 : theme.color.gray.c900)};
  font-size: ${({ ttype = 'body' }) => getFontSize(ttype)};
  ${({ center }) => center && 'text-align: center;'}
  ${({ underline }) => underline && 'text-decoration: underline;'}
`;

export const Loading = styled.ActivityIndicator`
  padding-vertical: 16px;
`;

export const RefreshControl = styled.RefreshControl``;
