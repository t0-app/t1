import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { ThemeWrapper } from 'src/config/theme';
import { CHARACTER_1 } from 'src/data/mock';
import ProfileUI, { ProfileUIProps } from './';

const meta: Meta<ProfileUIProps> = {
  title: 'screens/profile',
  component: ProfileUI,
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    ),
  ],
};

export default meta;

type Story = StoryObj<ProfileUIProps>;

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
