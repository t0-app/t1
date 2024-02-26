import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import styled from 'styled-components/native';
import { ThemeStoryWrapper, ThemeWrapper, light } from 'src/config/theme';
import { ColorMap } from 'src/config/theme/types';
import { TType, Text, getFontSize } from './';

const textTypes: TType[] = ['h1', 'h2', 'title', 'body', 'light'];

const TextContainer = styled.View`
  background-color: ${({ theme }) => theme.color.bg};
`;

const ColorRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const ColorBox = styled.View<{ color: string }>`
  width: 100px;
  height: 100px;
  background-color: ${({ color }) => color};
  padding: 4px;
  justify-content: flex-end;
`;

type ColorKey = keyof ColorMap;

interface StyleViewProps {}
function StyleView() {
  return (
    <>
      <ColorRow>
        {(Object.keys(light.color) as ColorKey[]).map((colorKey) => (
          <ColorBox color={light.color[colorKey]}>
            <Text
              light={colorKey === 'high'}
              ttype={'light'}>{`${colorKey}: ${light.color[colorKey]}`}</Text>
          </ColorBox>
        ))}
      </ColorRow>
      <ThemeStoryWrapper>
        <TextContainer>
          {textTypes.map((ttype) => (
            <Text key={ttype} ttype={ttype}>{`Text-${ttype}-${getFontSize(ttype)}`}</Text>
          ))}
        </TextContainer>
      </ThemeStoryWrapper>
    </>
  );
}

const meta: Meta<StyleViewProps> = {
  title: 'components/style',
  component: StyleView,
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    ),
  ],
};

export default meta;

type Story = StoryObj<StyleViewProps>;

export const Default: Story = {};
