import 'styled-components';

interface ColorMap {
  primary: string;
  accent: string;
  high: string;
  medium: string;
  low: string;
  border: string;
  bg: string;
}

interface FontInter {
  light: string;
  regular: string;
  bold: string;
}

interface FontFamily {
  inter: FontInter;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorMap;
    fontFamily: FontFamily;
  }
}
