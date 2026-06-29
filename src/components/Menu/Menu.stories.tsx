import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';
import referencePng from './Menu.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  title: 'Components/Menu',
  component: Menu,
  decorators: [withFigmaReference(referencePng), (Story) => (<div style={{ width: 140, minHeight: 258 }}><Story /></div>)],
  parameters: { layout: 'fullscreen' },
  args: {
    showDivider: true,
    variant: 'default',
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  args: { isLoading: true },
};

export const Disabled: Story = {
  args: { isDisabled: true, variant: 'disabled' },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    destructive: true,
  },
};

export const WithDivider: Story = {
  args: {
    variant: 'withDivider',
    showDivider: true,
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'withIcon',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="8" stroke="#9E9E9E" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
};
