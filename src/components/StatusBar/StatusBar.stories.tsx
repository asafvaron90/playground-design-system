// StatusBar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { StatusBar } from './StatusBar';

const meta = {
  title: 'Components/StatusBar',
  component: StatusBar,
  args: {
    time: '9:41',
    size: 'medium',
    variant: 'default',
  },
} satisfies Meta<typeof StatusBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Inverted: Story = {
  args: {
    variant: 'inverted',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};
