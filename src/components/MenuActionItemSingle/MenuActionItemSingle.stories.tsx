// MenuActionItemSingle.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MenuActionItemSingle from './MenuActionItemSingle';

const meta: Meta<typeof MenuActionItemSingle> = {
  title: 'Components/MenuActionItemSingle',
  component: MenuActionItemSingle,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary'],
    },
    disabled: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    variant: 'default',
    disabled: false,
    children: 'Menu Item',
  },
};

export const Primary: Story = {
  args: {
    size: 'medium',
    variant: 'primary',
    disabled: false,
    children: 'Primary Item',
  },
};

export const Secondary: Story = {
  args: {
    size: 'medium',
    variant: 'secondary',
    disabled: false,
    children: 'Secondary Item',
  },
};

export default meta;
