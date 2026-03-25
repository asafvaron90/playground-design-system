// SortButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { SortButton } from './SortButton';

const meta = {
  title: 'Components/SortButton',
  component: SortButton,
  args: { children: 'Sort' },
} satisfies Meta<typeof SortButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Medium: Story = {
  args: { size: 'md' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const Disabled: Story = {
  args: { disabled: true },
};
