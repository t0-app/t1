import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StoryList, StoryListProps } from 'components/helper';
import { ThemeWrapper } from 'config/theme';
import { Button, ButtonProps } from './';

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
      },
      {
        text: 'Login',
        type: 'outline',
      },
      {
        text: 'Signup',
        type: 'outline',
      },
    ],
  },
};
