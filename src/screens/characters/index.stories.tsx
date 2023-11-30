import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { ThemeWrapper } from 'src/config/theme';
import { CHARACTER_1, CHARACTER_2 } from 'src/data/mock';
import CharactersUI, { CharactersUIProps } from './';

const meta: Meta<CharactersUIProps> = {
  title: 'screens/Characters',
  component: CharactersUI,
  args: {
    onSelectedCharacter: () => {},
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

type Story = StoryObj<CharactersUIProps>;

export const Default: Story = {
  args: {
    characters: [CHARACTER_1, CHARACTER_2],
    isLoading: false,
    isFetching: false,
  },
};

export const Loading: Story = {
  args: {
    characters: [],
    isLoading: true,
    isFetching: false,
  },
};

export const LoadingMore: Story = {
  args: {
    characters: [CHARACTER_1, CHARACTER_2],
    isLoading: false,
    isFetching: true,
  },
};
