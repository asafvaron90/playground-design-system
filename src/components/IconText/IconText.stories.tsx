// IconText.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import IconText, { IconTextProps } from './IconText';

const meta: Meta<typeof IconText> = {
  title: 'Components/IconText',
  component: IconText,
  argTypes: {
    text: { control: 'text' },
    icon: { control: 'text' },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'radio',
      options: ['default', 'primary'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'join',
    icon: <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: 'var(--color-icons)' }} />,
    size: 'medium',
    variant: 'default',
    disabled: false,
  },
};