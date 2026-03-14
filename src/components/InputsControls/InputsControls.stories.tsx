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
      options: ['default', 'outlined', 'filled'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    variant: 'default',
    disabled: false,
  },
};

export const Outlined: Story = {
  args: {
    size: 'medium',
    variant: 'outlined',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    size: 'medium',
    variant: 'default',
    disabled: true,
  },
};