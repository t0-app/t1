import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { ThemeWrapper } from 'src/config/theme';
import { LOCATION_1 } from 'src/data/mock';
import LocationUI, { LocationUIProps } from './';

const meta: Meta<LocationUIProps> = {
  title: 'screens/location',
  component: LocationUI,
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

type Story = StoryObj<LocationUIProps>;

export const Default: Story = {
  args: {
    location: LOCATION_1,
  },
};

export const Loading: Story = {
  args: {
    location: undefined,
    isLoading: true,
  },
};
