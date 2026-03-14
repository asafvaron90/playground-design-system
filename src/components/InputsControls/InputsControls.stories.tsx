// InputsControls.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import InputsControls, { InputsControlsProps } from './InputsControls';

const meta: Meta<typeof InputsControls> = {
  title: 'InputsControls',
  component: InputsControls,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined'],
    },
    state: {
      control: { type: 'select' },
      options: ['normal', 'disabled', 'error'],
    },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    size: 'medium',
    variant: 'default',
    state: 'normal',
  },
};

export const SmallOutlined: Story = {
  args: {
    size: 'small',
    variant: 'outlined',
    state: 'normal',
  },
};

export const LargeError: Story = {
  args: {
    size: 'large',
    variant: 'default',
    state: 'error',
  },
};

export const Disabled: Story = {
  args: {
    size: 'medium',
    variant: 'default',
    state: 'disabled',
  },
};