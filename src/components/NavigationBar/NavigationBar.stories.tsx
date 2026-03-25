// NavigationBar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { NavigationBar } from './NavigationBar';

const meta = {
  title: 'Components/NavigationBar',
  component: NavigationBar,
  args: {
    title: 'Page Title',
    size: 'md',
    variant: 'default',
    isLoading: false,
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
