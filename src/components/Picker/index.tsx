import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import { Text, TextInput } from 'src/components/style';
import { t } from 'src/config/i18n';
import Button from '../Button';
import ButtonPicker from '../ButtonPicker';

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
`;
export interface PickerProps {
  options: string[];
  onChange: (option: string) => void;
}

export default function Picker({ options, onChange }: PickerProps) {
  const [selectedIndex, setIndex] = useState(-1);

  const select = (index: number, option: string) => {
    if (index === selectedIndex) {
      setIndex(-1);
      onChange('');
    } else {
      onChange(option);
      setIndex(index);
    }
  };

  return (
    <Container>
      {options.map((option, index) => (
        <ButtonPicker
          key={index}
          text={option}
          first={index === 0}
          last={index === options.length - 1}
          type={index === selectedIndex ? 'selected' : 'unselected'}
          onPress={() => select(index, option)}></ButtonPicker>
      ))}
    </Container>
  );
}
