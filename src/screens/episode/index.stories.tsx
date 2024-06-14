import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeWrapper } from 'src/config/theme';
import { CHARACTER_1, CHARACTER_2, CHARACTER_3, EPISODE_3 } from 'src/data/mock';
import EpisodeUI, { EpisodeUIProps } from './';

const meta: Meta<EpisodeUIProps> = {
  title: 'screens/episode',
  component: EpisodeUI,
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    ),
  ],
};

export default meta;

type Story = StoryObj<EpisodeUIProps>;

export const Default: Story = {
  args: {
    episode: EPISODE_3,
    characters: [CHARACTER_1, CHARACTER_2, CHARACTER_3],
  },
};

export const Loading: Story = {
  args: {
    episode: undefined,
    isLoading: true,
  },
};
