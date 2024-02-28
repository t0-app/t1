import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { ThemeWrapper } from 'src/config/theme';
import { EPISODE_1, EPISODE_2 } from 'src/data/mock';
import EpisodesUI, { EpisodesUIProps } from './';

const meta: Meta<EpisodesUIProps> = {
  title: 'screens/episodes',
  component: EpisodesUI,
  args: {
    onRefresh: () => {},
    onFetchMore: () => {},
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

type Story = StoryObj<EpisodesUIProps>;

export const Default: Story = {
  args: {
    episodes: [EPISODE_1, EPISODE_2],
    isLoading: false,
    isFetching: false,
  },
};

export const Loading: Story = {
  args: {
    episodes: [],
    isLoading: false,
    isFetching: true,
  },
};
