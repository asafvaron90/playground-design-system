import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'flat', 'stroked', 'basic', 'toggle', 'multi', 'pressed', 'disabled', 'icon'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    disabled: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    disabled: false,
    children: 'Button',
  },
};

export const Flat: Story = {
  args: {
    variant: 'flat',
    size: 'medium',
    children: 'Flat Button',
  },
};

export const Stroked: Story = {
  args: {
    variant: 'stroked',
    size: 'medium',
    children: 'Stroked Button',
  },
};

export const Basic: Story = {
  args: {
    variant: 'basic',
    size: 'medium',
    children: 'Basic Button',
  },
};

export const Toggle: Story = {
  args: {
    variant: 'toggle',
    size: 'medium',
    children: 'Toggle Button',
  },
};

export const Multi: Story = {
  args: {
    variant: 'multi',
    size: 'medium',
    children: 'Multi Button',
  },
};

export const Pressed: Story = {
  args: {
    variant: 'pressed',
    size: 'medium',
    children: 'Pressed Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    size: 'medium',
    disabled: true,
    children: 'Disabled Button',
  },
};

export const Icon: Story = {
  args: {
    variant: 'icon',
    size: 'medium',
    children: 'Icon Button',
  },
};
