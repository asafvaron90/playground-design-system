// NavigationBar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { NavigationBar } from './NavigationBar';

const meta = {
  title: 'Components/NavigationBar',
  component: NavigationBar,
  args: {
    title: 'Page Title',
    backButtonContent: 'Back',
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    state: 'default',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    state: 'default',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    state: 'disabled',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    state: 'default',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    state: 'default',
  },
};
