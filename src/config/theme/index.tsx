import React from 'react';
import { useColorScheme } from 'react-native';
import { DefaultTheme } from 'styled-components';
import { ThemeProvider } from 'styled-components/native';

export const light: DefaultTheme = {
  color: {
    primary: '#02afc5',
    accent: '#70592d',
    high: '#000',
    medium: '#344054',
    low: '#98A2B3',
    border: '#F9FAFB',
    bg: '#FFF',
  },
  fontFamily: {
    inter: {
      light: 'Inter300',
      regular: 'Inter400',
      bold: 'Inter700',
    },
  },
};

export const dark: DefaultTheme = {
  color: {
    primary: '#02afc5',
    accent: '#70592d',
    high: '#FFF',
    medium: '#E4E7EC',
    low: '#98A2B3',
    border: '#344054',
    bg: '#000',
  },
  fontFamily: {
    inter: {
      light: 'Inter300',
      regular: 'Inter400',
      bold: 'Inter700',
    },
  },
};

interface WrapperProps {
  children: React.ReactNode;
}
export const ThemeWrapper = ({ children }: WrapperProps): JSX.Element => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? dark : light;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const ThemeLightWrapper = ({ children }: WrapperProps): JSX.Element => {
  return <ThemeProvider theme={light}>{children}</ThemeProvider>;
};

export const ThemeDarkWrapper = ({ children }: WrapperProps): JSX.Element => {
  return <ThemeProvider theme={dark}>{children}</ThemeProvider>;
};

export const ThemeStoryWrapper = ({ children }: WrapperProps): JSX.Element => {
  return (
    <>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
      <ThemeProvider theme={dark}>{children}</ThemeProvider>
    </>
  );
};
