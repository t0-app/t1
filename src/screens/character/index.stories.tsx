import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { ThemeWrapper } from 'src/config/theme';
import { CHARACTER_1 } from 'src/data/mock';
import CharacterUI, { CharacterUIProps } from './';

const meta: Meta<CharacterUIProps> = {
  title: 'screens/character',
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
