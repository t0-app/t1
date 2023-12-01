import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StoryList, StoryListProps } from 'src/components/helper';
import { ThemeWrapper } from 'src/config/theme';
import Base, { BaseProps } from './';

const meta: Meta<StoryListProps<BaseProps>> = {
  title: 'components/Base',
  component: StoryList,
  args: {
    Component: Base,
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

type Story = StoryObj<StoryListProps<BaseProps>>;

export const Default: Story = {
  args: {
    items: [
      {
        text: 'Base 1',
      },
      {
        text: 'Base 2',
      },
    ],
  },
};
