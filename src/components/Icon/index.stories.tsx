import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StoryList, StoryListProps } from 'src/components/helper';
import { ThemeWrapper } from 'src/config/theme';
import Icon, { IconName, IconProps } from './';

const meta: Meta<StoryListProps<IconProps>> = {
  title: 'components/Icon',
  component: StoryList,
  args: {
    Component: Icon,
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

type Story = StoryObj<StoryListProps<IconProps>>;

const iconNames: IconName[] = [
  'chevron-left',
  'chevron-right',
  'verified-user',
  'group',
  'person',
  'map',
];

export const Default: Story = {
  args: {
    items: iconNames.map((name) => ({ name })),
  },
};
