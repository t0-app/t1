import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { ThemeWrapper } from 'src/config/theme';
import { EPISODE_3 } from 'src/data/mock';
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
  },
};

export const Loading: Story = {
  args: {
    episode: undefined,
    isLoading: true,
  },
};
