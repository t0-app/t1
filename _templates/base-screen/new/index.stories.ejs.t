---
to: screens/<%= h.changeCase.paramCase(name) %>/index.stories.tsx
---
import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { CHARACTER_1 } from 'data/mock';
import { ThemeWrapper } from 'config/theme';
import <%= name %>UI, { <%= name %>UIProps } from './';

const meta: Meta<<%= name %>UIProps> = {
  title: 'screens/<%= h.changeCase.paramCase(name) %>',
  component: <%= name %>UI,
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    ),
  ],
};

export default meta;

type Story = StoryObj<<%= name %>UIProps>;

export const Default: Story = {
  args: {
    character: CHARACTER_1,
  },
};

export const Loading: Story = {
  args: {
    character: undefined,
    isLoading: true,
  },
};
