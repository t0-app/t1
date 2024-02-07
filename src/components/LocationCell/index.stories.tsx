import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StoryList, StoryListProps } from 'src/components/helper';
import { ThemeWrapper } from 'src/config/theme';
import { LOCATION_1, LOCATION_2, LOCATION_3 } from 'src/data/mock';
import LocationCell, { LocationCellProps } from './';

const meta: Meta<StoryListProps<LocationCellProps>> = {
  title: 'components/LocationCell',
  component: StoryList,
  args: {
    Component: LocationCell,
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

type Story = StoryObj<StoryListProps<LocationCellProps>>;

export const Default: Story = {
  args: {
    items: [
      {
        location: LOCATION_1,
      },
      {
        location: LOCATION_2,
      },
      {
        location: LOCATION_3,
      },
    ],
  },
};
