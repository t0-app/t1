import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeWrapper } from 'src/config/theme';
import LaunchUI, { LaunchUIProps } from './';

const meta: Meta<LaunchUIProps> = {
  title: 'screens/launch',
  component: LaunchUI,
  args: {
    onSignIn: () => {},
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

type Story = StoryObj<LaunchUIProps>;

export const Default: Story = {};
