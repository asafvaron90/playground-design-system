import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'flat', 'stroked', 'basic', 'toggle', 'multi', 'pressed', 'disabled', 'icon'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'medium',
  disabled: false,
};

export const Flat = Template.bind({});
Flat.args = {
  variant: 'flat',
  size: 'medium',
  disabled: false,
};

export const Stroked = Template.bind({});
Stroked.args = {
  variant: 'stroked',
  size: 'medium',
  disabled: false,
};

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  size: 'medium',
  disabled: false,
};

export const Toggle = Template.bind({});
Toggle.args = {
  variant: 'toggle',
  size: 'medium',
  disabled: false,
};

export const Multi = Template.bind({});
Multi.args = {
  variant: 'multi',
  size: 'medium',
  disabled: false,
};

export const Pressed = Template.bind({});
Pressed.args = {
  variant: 'pressed',
  size: 'medium',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'disabled',
  size: 'medium',
  disabled: true,
};

export const Icon = Template.bind({});
Icon.args = {
  variant: 'icon',
  size: 'medium',
  disabled: false,
};
