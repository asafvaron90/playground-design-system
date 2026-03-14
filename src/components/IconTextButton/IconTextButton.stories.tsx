// IconTextButton.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import IconTextButton, { IconTextButtonProps } from './IconTextButton';

const meta: Meta<typeof IconTextButton> = {
  title: 'Components/IconTextButton',
  component: IconTextButton,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    disabled: {
      control: 'boolean',
    },
    text: {
      control: 'text',
    },
    icon: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    variant: 'primary',
    disabled: false,
    text: 'Join',
    icon: <span>🔗</span>,
  },
};