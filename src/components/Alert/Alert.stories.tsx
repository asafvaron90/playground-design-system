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
    className: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args}>This is an alert message!</Alert>;

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  size: 'medium',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  size: 'medium',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  size: 'medium',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  size: 'medium',
};
