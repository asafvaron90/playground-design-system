// full .stories.tsx file content based on the template
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'flat', 'stroked', 'basic', 'toggle', 'multi', 'pressed', 'disabled', 'icon'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {
    variant: 'default',
    size: 'medium',
    disabled: false,
  },
};
