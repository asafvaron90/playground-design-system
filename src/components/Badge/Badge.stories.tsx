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
    className: { control: 'text' },
  },
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Badge',
  size: 'medium',
  variant: 'default',
  disabled: false,
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Badge',
  size: 'medium',
  variant: 'primary',
  disabled: false,
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success Badge',
  size: 'medium',
  variant: 'success',
  disabled: false,
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning Badge',
  size: 'medium',
  variant: 'warning',
  disabled: false,
};

export const Error = Template.bind({});
Error.args = {
  children: 'Error Badge',
  size: 'medium',
  variant: 'error',
  disabled: false,
};
