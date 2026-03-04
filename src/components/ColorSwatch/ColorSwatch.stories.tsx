// ColorSwatch.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import ColorSwatch from './ColorSwatch';

export default {
  title: 'Components/ColorSwatch',
  component: ColorSwatch,
  argTypes: {
    colorName: {
      control: 'text',
      description: 'The name of the color token to display',
    },
    colorValue: {
      control: 'text',
      description: 'The hex value of the color token',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'The size of the swatch',
    },
    className: {
      control: 'text',
      description: 'Additional class names to apply to the swatch',
    },
  },
} as Meta;

const Template: Story = (args) => <ColorSwatch {...args} />;

export const Default = Template.bind({});
Default.args = {
  colorName: '0E92CB',
  colorValue: '#0E92CB',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  colorName: 'D7E3EC',
  colorValue: '#D7E3EC',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  colorName: 'E7F4FD',
  colorValue: '#E7F4FD',
  size: 'large',
};
