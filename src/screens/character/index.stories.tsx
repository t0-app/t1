import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeWrapper } from 'src/config/theme';
import { CHARACTER_1, EPISODE_1, EPISODE_2, EPISODE_3 } from 'src/data/mock';
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
    episodes: [EPISODE_1, EPISODE_2, EPISODE_3],
  },
};

export const Loading: Story = {
  args: {
    character: undefined,
    isLoading: true,
  },
};
