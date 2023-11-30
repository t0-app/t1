import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StoryList, StoryListProps } from 'components/helper';
import { ThemeWrapper } from 'config/theme';
import { NavHeader, NavHeaderProps } from './';

const meta: Meta<StoryListProps<NavHeaderProps>> = {
  title: 'components/NavHeader',
  component: StoryList,
  args: {
    Component: NavHeader,
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

type Story = StoryObj<StoryListProps<NavHeaderProps>>;

export const Default: Story = {
  args: {
    items: [
      {
        name: 'Home',
        path: '',
      },
      {
        name: 'Characters',
        path: 'characters',
      },
      {
        name: 'Character',
        path: 'characters/1',
        onGoBack: () => {},
      },
    ],
  },
};
