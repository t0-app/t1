import styled, { DefaultTheme } from 'styled-components/native';
import { ColorMap } from 'src/config/theme/types';

export const SContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.color.bg};
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

export type ColorKey = keyof ColorMap;

export interface TextProps {
  flex?: boolean;
  ttype?: TType;
  center?: boolean;
  light?: boolean;
  underline?: boolean;
  color?: ColorKey;
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
  ${({ flex }) => flex && 'flex:1;'}
  font-family: ${({ ttype = 'body', theme }) => getFontFamily(ttype, theme)};
  color: ${({ color, light, theme }) =>
    color ? theme.color[color] : light ? theme.color.bg : theme.color.high};
  font-size: ${({ ttype = 'body' }) => getFontSize(ttype)};
  ${({ center }) => center && 'text-align: center;'}
  ${({ underline }) => underline && 'text-decoration: underline;'}
`;

export const Loading = styled.ActivityIndicator`
  padding-vertical: 16px;
`;

export const RefreshControl = styled.RefreshControl``;
