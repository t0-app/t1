import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { StoryList, StoryListProps } from 'src/components/helper';
import { ThemeWrapper } from 'src/config/theme';
import ButtonPicker, { ButtonPickerProps } from '.';

const meta: Meta<StoryListProps<ButtonPickerProps>> = {
  title: 'components/Picker/ButtonPicker',
  component: StoryList,
  args: {
    Component: ButtonPicker,
    flexWrap: true,
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

type Story = StoryObj<StoryListProps<ButtonPickerProps>>;

export const Default: Story = {
  args: {
    items: [
      {
        text: 'Signup',
        type: 'selected',
      },
      {
        text: 'Logout',
        type: 'unselected',
      },
      {
        text: 'First',
        type: 'unselected',
        first: true,
      },
      {
        text: 'Last',
        type: 'unselected',
        last: true,
      },
    ],
  },
};
