// NavigationBar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { NavigationBar } from './NavigationBar';

const meta = {
  title: 'Components/NavigationBar',
  component: NavigationBar,
  args: {
    title: 'Page Title',
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    state: 'active',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    state: 'active',
  },
};

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

export const Disabled: Story = {
  args: {
    state: 'disabled',
  },
};
