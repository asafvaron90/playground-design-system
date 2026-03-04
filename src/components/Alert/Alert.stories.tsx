// Alert.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Alert, { AlertProps } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['info', 'success', 'warning', 'error'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    children: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  size: 'medium',
  children: 'This is an info alert.',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  size: 'medium',
  children: 'This is a success alert.',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  size: 'medium',
  children: 'This is a warning alert.',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  size: 'medium',
  children: 'This is an error alert.',
};
