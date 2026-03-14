// MenuActionItemSingle.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import MenuActionItemSingle from './MenuActionItemSingle';

const meta: Meta<typeof MenuActionItemSingle> = {
  title: 'MenuActionItemSingle',
  component: MenuActionItemSingle,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['default', 'selected'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    variant: 'default',
    disabled: false,
    children: 'Menu Item',
  },
};

export const Selected: Story = {
  args: {
    size: 'medium',
    variant: 'selected',
    disabled: false,
    children: 'Selected Item',
  },
};

export const Disabled: Story = {
  args: {
    size: 'medium',
    variant: 'default',
    disabled: true,
    children: 'Disabled Item',
  },
};