---
to: components/<%= name %>/index.stories.tsx
---
import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StoryList, StoryListProps } from 'components/helper';
import { ThemeWrapper } from 'config/theme';
import { <%= name %>, <%= name %>Props } from './';

const meta: Meta<StoryListProps<<%= name %>Props>> = {
  title: 'components/<%= name %>',
  component: StoryList,
  args: {
    Component: <%= name %>,
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

type Story = StoryObj<StoryListProps<<%= name %>Props>>;

export const Default: Story = {
  args: {
    items: [
      {
        text: '<%= name %> 1',
      },
      {
        text: '<%= name %> 2',
      },
    ],
  },
};
