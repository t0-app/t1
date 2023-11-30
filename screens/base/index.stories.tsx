import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { CHARACTER_1 } from 'data/mock';
import { ThemeWrapper } from 'config/theme';
import BaseUI, { BaseUIProps } from './';

const meta: Meta<BaseUIProps> = {
  title: 'screens/base',
  component: BaseUI,
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    ),
  ],
};

export default meta;

type Story = StoryObj<BaseUIProps>;

export const Default: Story = {
  args: {
    character: CHARACTER_1,
  },
};

export const Loading: Story = {
  args: {
    character: undefined,
    isLoading: true,
  },
};
