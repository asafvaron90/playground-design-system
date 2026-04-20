// src/components/ButtonPrimary/ButtonPrimary.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonPrimary } from './ButtonPrimary';

const meta = {
  title: 'Components/Button/Primary',
  component: ButtonPrimary,
  args: { children: 'Click me' },
} satisfies Meta<typeof ButtonPrimary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Loading: Story = { args: { isLoading: true } };
export const Disabled: Story = { args: { isDisabled: true } };
export const WithIcon: Story = { args: { icon: <span>🔍</span> } };
export const FullWidth: Story = { args: { fullWidth: true } };
export const Large: Story = { args: { size: 'lg' } };
export const Medium: Story = { args: { size: 'md' } };
export const Small: Story = { args: { size: 'sm' } };
export const ExtraSmall: Story = { args: { size: 'xs' } };