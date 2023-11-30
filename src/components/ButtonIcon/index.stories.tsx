import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StoryList, StoryListProps } from 'src/components/helper';
import { ThemeWrapper } from 'src/config/theme';
import { ButtonIcon, ButtonIconProps, IconName } from './';

const meta: Meta<StoryListProps<ButtonIconProps>> = {
  title: 'components/ButtonIcon',
  component: StoryList,
  args: {
    Component: ButtonIcon,
    flexWrap: true,
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

type Story = StoryObj<StoryListProps<ButtonIconProps>>;

const iconNames: IconName[] = ['chevron-left', 'chevron-right', 'verified-user'];

export const Default: Story = {
  args: {
    items: iconNames.map((name) => ({ name })),
  },
};
