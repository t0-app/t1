import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeWrapper } from 'src/config/theme';
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
    onStorybook: () => {},
    onLogout: () => {},
  },
};
