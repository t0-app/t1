import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StoryList, StoryListProps } from 'src/components/helper';
import { ThemeWrapper } from 'src/config/theme';
import { CHARACTER_1, CHARACTER_2 } from 'src/data/mock';
import Card, { CardProps } from './';

const meta: Meta<StoryListProps<CardProps>> = {
  title: 'components/Card',
  component: StoryList,
  args: {
    Component: Card,
  },
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    ),
  ],
};

export default meta;

type Story = StoryObj<StoryListProps<CardProps>>;

export const Default: Story = {
  args: {
    items: [
      {
        character: CHARACTER_1,
      },
      {
        character: CHARACTER_2,
      },
    ],
  },
};
