// MenuActionItem.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MenuActionItem, { MenuActionItemProps } from './MenuActionItem';

const meta: Meta<typeof MenuActionItem> = {
  title: 'MenuActionItem',
  component: MenuActionItem,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary'],
      },
    },
    state: {
      control: {
        type: 'select',
        options: ['normal', 'disabled', 'active'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    variant: 'default',
    state: 'normal',
    children: 'Menu Item',
  },
};

export const Primary: Story = {
  args: {
    size: 'medium',
    variant: 'primary',
    state: 'normal',
    children: 'Primary Item',
  },
};

export const Disabled: Story = {
  args: {
    size: 'medium',
    variant: 'default',
    state: 'disabled',
    children: 'Disabled Item',
  },
};

export const Active: Story = {
  args: {
    size: 'medium',
    variant: 'default',
    state: 'active',
    children: 'Active Item',
  },
};