import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { StoryList, StoryListProps } from 'src/components/helper';
import { ThemeWrapper } from 'src/config/theme';
import Picker, { PickerProps } from './';

const meta: Meta<StoryListProps<PickerProps>> = {
  title: 'components/Picker',
  component: StoryList,
  args: {
    Component: Picker,
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

type Story = StoryObj<StoryListProps<PickerProps>>;

export const Default: Story = {
  args: {
    items: [
      {
        options: ['Option 1', 'Option 2', 'Option 3'],
        onChange(option) {},
      },
      {
        options: ['Option 1', 'Option 2'],
        onChange(option) {},
      },
    ],
  },
};
