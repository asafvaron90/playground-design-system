// InputsControls.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import InputsControls from './InputsControls';

const meta: Meta<typeof InputsControls> = {
  title: 'Components/InputsControls',
  component: InputsControls,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['default', 'outlined'],
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'View all',
    size: 'medium',
    variant: 'default',
    disabled: false,
  },
};

export const Outlined: Story = {
  args: {
    children: 'View all',
    size: 'medium',
    variant: 'outlined',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'View all',
    size: 'medium',
    variant: 'default',
    disabled: true,
  },
};