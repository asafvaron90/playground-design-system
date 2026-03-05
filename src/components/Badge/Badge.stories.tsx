// Badge.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Badge, { BadgeProps } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    children: { control: 'text', defaultValue: 'Badge' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      defaultValue: 'medium',
    },
    variant: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'success', 'warning', 'error'],
      },
      defaultValue: 'default',
    },
    disabled: { control: 'boolean', defaultValue: false },
    className: { control: 'text' },
  },
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Badge',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Badge',
  variant: 'primary',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success Badge',
  variant: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning Badge',
  variant: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  children: 'Error Badge',
  variant: 'error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Badge',
  disabled: true,
};
