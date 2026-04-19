// src/components/ButtonSecondary/ButtonSecondary.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSecondary } from './ButtonSecondary';

const meta = {
  title: 'Components/Button/Secondary',
  component: ButtonSecondary,
  args: { children: 'Click me' },
} satisfies Meta<typeof ButtonSecondary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Loading: Story = { args: { isLoading: true } };
export const Disabled: Story = { args: { isDisabled: true } };
export const WithIcon: Story = { args: { type: 'icon', children: <span>🔍</span> } };