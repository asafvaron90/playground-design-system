// StatusBar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { StatusBar } from './StatusBar';

const meta = {
  title: 'Components/StatusBar',
  component: StatusBar,
  args: {
    time: '9:41',
  },
} satisfies Meta<typeof StatusBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    variant: 'light',
    size: 'md',
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    variant: 'light',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    variant: 'dark',
    size: 'lg',
  },
};
