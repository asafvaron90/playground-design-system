import React from 'react';
import { Meta, Story } from '@storybook/react';
import ColorSwatch from './ColorSwatch';

export default {
  title: 'Components/ColorSwatch',
  component: ColorSwatch,
  argTypes: {
    colorName: { control: 'text' },
    colorValue: { control: 'color' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const Template: Story = (args) => <ColorSwatch {...args} />;

export const Default = Template.bind({});
Default.args = {
  colorName: 'Primary',
  colorValue: 'var(--color-button-primary)',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  colorName: 'Secondary',
  colorValue: 'var(--color-button-secondary)',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  colorName: 'Tertiary',
  colorValue: 'var(--color-button-tertiary)',
  size: 'large',
};
