// Input.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const Template: Story = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Email',
  placeholder: 'Enter your email',
  helperText: 'We will not share your email.',
  size: 'medium',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Email',
  placeholder: 'Enter your email',
  error: 'Invalid email address',
  size: 'medium',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Email',
  placeholder: 'Enter your email',
  disabled: true,
  size: 'medium',
};