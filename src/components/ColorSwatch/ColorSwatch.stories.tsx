// ColorSwatch.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import ColorSwatch from './ColorSwatch';

export default {
  title: 'Components/ColorSwatch',
  component: ColorSwatch,
  argTypes: {
    colorName: { control: 'text' },
    colorValue: { control: 'text' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    className: { control: 'text' },
  },
} as Meta;

const Template: Story = (args) => <ColorSwatch {...args} />;

export const Default = Template.bind({});
Default.args = {
  colorName: 'primary',
  colorValue: '#new',
  size: 'medium',
};
