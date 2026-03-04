// Badge.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Badge, { BadgeProps } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    children: { control: 'text' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'success', 'warning', 'error'],
      },
    },
    disabled: { control: 'boolean' },
    className: { control: false },
  },
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Badge',
  size: 'medium',
  variant: 'default',
  disabled: false,
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  size: 'medium',
  variant: 'primary',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success',
  size: 'medium',
  variant: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning',
  size: 'medium',
  variant: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  children: 'Error',
  size: 'medium',
  variant: 'error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  size: 'medium',
  variant: 'default',
  disabled: true,
};