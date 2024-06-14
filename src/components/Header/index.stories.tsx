import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { StoryList, StoryListProps } from 'src/components/helper';
import { ThemeWrapper } from 'src/config/theme';
import Header, { HeaderProps } from './';

const meta: Meta<StoryListProps<HeaderProps>> = {
  title: 'components/Header',
  component: StoryList,
  args: {
    Component: Header,
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

type Story = StoryObj<StoryListProps<HeaderProps>>;

export const Default: Story = {
  args: {
    items: [
      {
        name: 'Characters',
      },
      {
        name: 'Character',
        onGoBack: () => {},
      },
      {
        name: 'Profile',
        buttonIcons: [
          { name: 'list', onPress: () => {} },
          { name: 'logout', onPress: () => {} },
        ],
      },
    ],
  },
};
