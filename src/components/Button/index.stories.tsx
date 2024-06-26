import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { StoryList, StoryListProps } from 'src/components/helper';
import { ThemeWrapper } from 'src/config/theme';
import Button, { ButtonProps } from './';

const meta: Meta<StoryListProps<ButtonProps>> = {
  title: 'components/Button',
  component: StoryList,
  args: {
    Component: Button,
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

type Story = StoryObj<StoryListProps<ButtonProps>>;

export const Default: Story = {
  args: {
    items: [
      {
        text: 'Login',
      },
      {
        text: 'Signup',
        type: 'outline',
      },
      {
        text: 'Logout',
        type: 'text',
      },
    ],
  },
};
