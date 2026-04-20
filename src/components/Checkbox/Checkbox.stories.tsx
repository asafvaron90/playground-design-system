// src/components/Checkbox/Checkbox.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: { children: 'Label' },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Selected: Story = { args: { isSelected: true } };
export const Indeterminate: Story = { args: { indeterminate: true } };
export const ErrorState: Story = { args: { hasError: true } };
export const Disabled: Story = { args: { isDisabled: true } };
export const Loading: Story = { args: { isLoading: true } };
export const WithIcon: Story = { args: { icon: <span>✓</span> } };