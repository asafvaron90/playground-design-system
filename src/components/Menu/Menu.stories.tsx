import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';
import referencePng from './Menu.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  title: 'Components/Menu',
  component: Menu,
  decorators: [withFigmaReference(referencePng), 
    (Story) => (
      <div style={{ width: 140, minHeight: 258 }}>
        <Story />
      </div>
    ),
  ],
  parameters: { layout: 'fullscreen' },
  args: {
    open: true,
    anchorEl: null,
    showDivider: true,
    variant: 'default',
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    destructive: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    isDisabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'withIcon',
  },
};

export const WithDivider: Story = {
  args: {
    variant: 'withDivider',
    showDivider: true,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
