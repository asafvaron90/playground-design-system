import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';
import referencePng from './Menu.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  decorators: [withFigmaReference(referencePng)],
  title: 'Components/Menu',
  component: Menu,
  args: {
    open: true,
    showDivider: true,
    variant: 'default',
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const WithDivider: Story = {
  args: {
    variant: 'withDivider',
    showDivider: true,
  },
};
