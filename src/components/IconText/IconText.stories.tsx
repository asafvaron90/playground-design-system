// IconText.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import IconText from './IconText';

const meta: Meta<typeof IconText> = {
  title: 'Components/IconText',
  component: IconText,
  argTypes: {
    icon: { control: 'text' },
    text: { control: 'text' },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    variant: { control: 'radio', options: ['default', 'primary'] },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: '🔗',
    text: 'Join',
    size: 'medium',
    variant: 'default',
    disabled: false,
  },
};

export const Primary: Story = {
  args: {
    icon: '🔗',
    text: 'Join',
    size: 'medium',
    variant: 'primary',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    icon: '🔗',
    text: 'Join',
    size: 'medium',
    variant: 'default',
    disabled: true,
  },
};