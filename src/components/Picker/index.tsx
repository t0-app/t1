import { useRef, useState } from 'react';
import styled from 'styled-components/native';
import { Text, TextInput } from 'src/components/style';
import { t } from 'src/config/i18n';

const Container = styled.Pressable`
  position: relative;
  margin-top: 5px;
  width: 120px;
  elevation: 5;
`;

const Options = styled.Pressable<OptionsProps>`
  position: absolute;
  top: 100%;
  display: ${({ isShowing }) => (isShowing ? 'flex' : 'none')};
  background-color: ${({ theme }) => theme.color.gray.c900};
  align-items: center;
  border-radius: 8px;
  z-index: 999;
`;

export interface OptionsProps {
  isShowing: boolean;
}

const TextOptions = styled.Pressable`
  font-family: ${({ theme }) => theme.fontFamily.inter.regular};
  color: ${({ theme }) => theme.color.gray.c0};
  font-size: 15px;
  text-align: center;
  align-items: center;
  width: 120px;
  height: 40px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray.c500};
  border-radius: 8px;
`;

const TextSelected = styled.Pressable<TextProps>`
  z-index: 100;
  background-color: ${({ light, theme }) => (light ? theme.color.gray.c0 : theme.color.gray.c500)};
  width: 120px;
  height: 40px;
  ${({ border, theme }) => border && `border: 2px ${theme.color.gray.c400} solid;`}
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 4px;
  padding: 10px;
  font-family: ${({ theme }) => theme.fontFamily.inter.regular};
  color: ${({ theme }) => theme.color.gray.c0};
  font-size: 15px;
`;

export interface PickerProps {
  options: string[];
  placeholder: string;
  value?: string;
  light?: boolean;
  border?: boolean;
}

export interface TextProps {
  border?: boolean;
  light?: boolean;
}

export default function Picker({ placeholder, border, options }: PickerProps) {
  const [selectedText, setText] = useState(placeholder);
  const [display, setDisplay] = useState(false);
  const showOptions = () => {
    setDisplay(true);
  };

  const select = (option: string) => {
    setDisplay(false);
    setText(option);
  };

  return (
    <Container>
      <TextSelected border={border} onPress={showOptions}>
        {selectedText}
      </TextSelected>
      <Options isShowing={display}>
        {options.map((option, index) => (
          <TextOptions key={index} onPress={() => select(option)}>
            {option}
          </TextOptions>
        ))}
      </Options>
    </Container>
  );
}
