import { useState } from 'react';
import styled from 'styled-components/native';
import ButtonPicker from './ButtonPicker';

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
`;
export interface PickerProps {
  testID?: string;
  options: string[];
  onChange: (option: string) => void;
}

export default function Picker({ testID, options, onChange }: PickerProps) {
  const [selectedOption, setOption] = useState('');

  const select = (option: string) => {
    if (option === selectedOption) {
      setOption('');
      onChange('');
    } else {
      onChange(option);
      setOption(option);
    }
  };

  return (
    <Container testID={testID}>
      {options.map((option, index) => (
        <ButtonPicker
          key={index}
          text={option}
          first={index === 0}
          last={index === options.length - 1}
          type={option === selectedOption ? 'selected' : 'unselected'}
          onPress={() => select(option)}
        />
      ))}
    </Container>
  );
}
