import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const SContainer = styled.SafeAreaView`
  flex: 1;
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

type TType = 'h1' | 'h2' | 'body' | 'light';

interface IText {
  ttype?: TType;
  center?: boolean;
}

const getFontFamily = (ttype: TType, theme: DefaultTheme): string => {
  const fontFamilyMap: { [key in TType]: string } = {
    h1: theme.fontFamily.inter.bold,
    h2: theme.fontFamily.inter.bold,
    body: theme.fontFamily.inter.regular,
    light: theme.fontFamily.inter.light,
  };
  return fontFamilyMap[ttype];
};

const getFontSize = (ttype: TType): string => {
  const fontFamilyMap: { [key in TType]: string } = {
    h1: '24px',
    h2: '20px',
    body: '14px',
    light: '11px',
  };
  return fontFamilyMap[ttype];
};

export const Text = styled.Text<IText>`
  ${({ ttype = 'body' }) => ['h1', 'h2']?.includes(ttype) && 'flex: 1;'}
  font-family: ${({ ttype = 'body', theme }) => getFontFamily(ttype, theme)};
  color: ${({ theme }) => theme.color.gray.c900};
  font-size: ${({ ttype = 'body' }) => getFontSize(ttype)};
  ${({ center }) => center && 'text-align: center;'}
`;

export const Loading = styled.ActivityIndicator`
  padding-vertical: 16px;
`;

export const RefreshControl = styled.RefreshControl``;
