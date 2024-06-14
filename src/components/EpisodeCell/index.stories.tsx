import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { StoryList, StoryListProps } from 'src/components/helper';
import { ThemeWrapper } from 'src/config/theme';
import { EPISODE_1, EPISODE_2, EPISODE_3 } from 'src/data/mock';
import EpisodeCell, { EpisodeCellProps } from './';

const meta: Meta<StoryListProps<EpisodeCellProps>> = {
  title: 'components/EpisodeCell',
  component: StoryList,
  args: {
    Component: EpisodeCell,
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

type Story = StoryObj<StoryListProps<EpisodeCellProps>>;

export const Default: Story = {
  args: {
    items: [
      {
        episode: EPISODE_1,
      },
      {
        episode: EPISODE_2,
      },
      {
        episode: EPISODE_3,
      },
    ],
  },
};
