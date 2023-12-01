import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { ThemeWrapper } from 'src/config/theme';
import { TType, Text, getFontSize } from './';

const textTypes: TType[] = ['h1', 'h2', 'title', 'body', 'light'];

interface StyleViewProps {}
function StyleView() {
  return (
    <>
      {textTypes.map((ttype) => (
        <Text key={ttype} ttype={ttype}>{`Text-${ttype}-${getFontSize(ttype)}`}</Text>
      ))}
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
