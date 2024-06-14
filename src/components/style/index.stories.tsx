import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import styled from 'styled-components/native';
import { ThemeDarkWrapper, ThemeStoryWrapper, ThemeWrapper, dark, light } from 'src/config/theme';
import { ColorKey, TType, Text, TextInput, getFontSize } from './';

const textTypes: TType[] = ['h1', 'h2', 'title', 'body', 'light'];

const TextContainer = styled.View`
  background-color: ${({ theme }) => theme.color.bg};
  padding: 12px;
`;

const TextRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const ColorRow = styled.View`
  background-color: ${({ theme }) => theme.color.bg};
  padding: 12px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ColorBox = styled.View``;

const ColorBG = styled.View<{ color: string }>`
  width: 100px;
  height: 100px;
  background-color: ${({ color }) => color};
  padding: 4px;
  justify-content: flex-end;
  border: ${({ theme }) => theme.color.high} 1px;
`;

const textColors: ColorKey[] = ['high', 'medium', 'low', 'primary', 'accent'];

interface StyleViewProps {}
function StyleView() {
  return (
    <>
      <ColorRow>
        {(Object.keys(light.color) as ColorKey[]).map((colorKey) => (
          <ColorBox key={colorKey}>
            <ColorBG color={light.color[colorKey]} />
            <Text center>{`${colorKey}\n${light.color[colorKey]}`}</Text>
          </ColorBox>
        ))}
      </ColorRow>
      <ThemeDarkWrapper>
        <ColorRow>
          {(Object.keys(dark.color) as ColorKey[]).map((colorKey) => (
            <ColorBox key={colorKey}>
              <ColorBG color={dark.color[colorKey]} />
              <Text center>{`${colorKey}\n${dark.color[colorKey]}`}</Text>
            </ColorBox>
          ))}
        </ColorRow>
      </ThemeDarkWrapper>
      <ThemeStoryWrapper>
        <TextContainer>
          {textTypes.map((ttype) => (
            <TextRow key={ttype}>
              {textColors.map((textColor) => (
                <Text
                  flex
                  key={`${ttype}-${textColor}`}
                  ttype={ttype}
                  color={textColor}>{`Text-${ttype}-${getFontSize(ttype)} `}</Text>
              ))}
            </TextRow>
          ))}
        </TextContainer>
      </ThemeStoryWrapper>
      <ThemeStoryWrapper>
        <TextContainer>
          <TextInput placeholder="placeholder" />
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
