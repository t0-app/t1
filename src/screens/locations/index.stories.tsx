import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeWrapper } from 'src/config/theme';
import { LOCATION_1, LOCATION_2, LOCATION_3 } from 'src/data/mock';
import LocationsUI, { LocationsUIProps } from './';

const meta: Meta<LocationsUIProps> = {
  title: 'screens/locations',
  component: LocationsUI,
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

type Story = StoryObj<LocationsUIProps>;

export const Default: Story = {
  args: {
    locations: [LOCATION_1, LOCATION_2, LOCATION_3],
    isLoading: false,
    isFetching: false,
  },
};

export const Loading: Story = {
  args: {
    locations: [],
    isLoading: false,
    isFetching: true,
  },
};
