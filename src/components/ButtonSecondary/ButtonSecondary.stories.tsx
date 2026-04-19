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
export const WithIcon: Story = { args: { icon: <span>🔔</span> } };
export const FullWidth: Story = { args: { fullWidth: true } };
export const LargeSize: Story = { args: { size: 'lg' } };
export const MediumSize: Story = { args: { size: 'md' } };
export const SmallSize: Story = { args: { size: 'sm' } };
export const ExtraSmallSize: Story = { args: { size: 'xs' } };