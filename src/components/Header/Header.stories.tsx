// Header.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  title: 'Components/Header',
  component: Header,
  args: {
    title: 'Page Title',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    onBack: () => alert('Back button clicked'),
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    onBack: () => alert('Back button clicked'),
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    variant: 'secondary',
    size: 'small',
  },
};
