import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { CHARACTER_1 } from 'data/mock';
import { ThemeWrapper } from 'config/theme';
import { CharacterUI, CharacterUIProps } from './[id]';

const meta: Meta<CharacterUIProps> = {
  title: 'Character',
  component: CharacterUI,
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    ),
  ],
};

export default meta;

type Story = StoryObj<CharacterUIProps>;

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
