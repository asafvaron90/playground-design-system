// Card.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  args: {
    children: 'Card Content',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallPrimary: Story = {
  args: { size: 'sm', variant: 'primary', state: 'default' },
};

export const MediumSecondary: Story = {
  args: { size: 'md', variant: 'secondary', state: 'default' },
};

export const LargeDisabled: Story = {
  args: { size: 'lg', variant: 'primary', state: 'disabled' },
};
