// Input.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Input, { InputProps } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Email',
  placeholder: 'Enter your email',
  helperText: 'We will never share your email.',
  disabled: false,
  error: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Email',
  placeholder: 'Enter your email',
  helperText: 'We will never share your email.',
  disabled: true,
  error: false,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Email',
  placeholder: 'Enter your email',
  helperText: 'Invalid email address.',
  disabled: false,
  error: true,
};