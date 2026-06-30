import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';
import referencePng from './Menu.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';
import React from 'react';

const meta = {
  decorators: [withFigmaReference(referencePng)],
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [{ name: 'light', value: '#f5f5f5' }],
    },
  },
  args: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  args: { isLoading: true },
};

export const Disabled: Story = {
  args: { isDisabled: true },
};

export const Destructive: Story = {
  args: { variant: 'destructive', destructive: true },
};

export const CustomItems: Story = {
  args: {
    items: [
      { id: 'action1', label: 'Action One' },
      { id: 'action2', label: 'Action Two', showDividerAfter: true },
      { id: 'action3', label: 'Delete', destructive: true },
    ],
  },
};
