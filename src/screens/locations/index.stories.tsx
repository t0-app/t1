import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { ThemeWrapper } from 'src/config/theme';
import { CHARACTER_1, LOCATION_1, LOCATION_2, LOCATION_3 } from 'src/data/mock';
import LocationsUI, { LocationsUIProps } from './';

const meta: Meta<LocationsUIProps> = {
  title: 'screens/locations',
  component: LocationsUI,
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
  },
};

export const Loading: Story = {
  args: {
    locations: [],
    isLoading: true,
  },
};
