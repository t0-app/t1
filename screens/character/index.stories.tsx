import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { CHARACTER_1 } from 'data/mock';
import { ThemeWrapper } from 'config/theme';
import CharacterUI, { CharacterUIProps } from './';

const meta: Meta<CharacterUIProps> = {
  title: 'screens/Character',
  component: CharacterUI,
  args: {
    onGoBack: () => {},
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
