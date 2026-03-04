// ColorSwatch.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import ColorSwatch from './ColorSwatch';

export default {
  title: 'Components/ColorSwatch',
  component: ColorSwatch,
  argTypes: {
    colorName: {
      control: {
        type: 'select',
        options: Object.keys({
          'color-091c2a': 'var(--color-091c2a)',
          'color-0e92cb': 'var(--color-0e92cb)',
          'color-d7e3ec': 'var(--color-d7e3ec)',
          'color-e7f4fd': 'var(--color-e7f4fd)',
          'color-1st-click-ascending': 'var(--color-1st-click-ascending)',
          'color-chip': 'var(--color-chip)',
          'color-menu-item': 'var(--color-menu-item)',
          'color-active': 'var(--color-active)',
          'color-button': 'var(--color-button)',
          'color-buttons': 'var(--color-buttons)',
          'color-color-fill-only-on-hover-click': 'var(--color-color-fill-only-on-hover-click)',
          'color-error': 'var(--color-error)',
          'color-helper-text': 'var(--color-helper-text)',
          'color-input-dropdown': 'var(--color-input-dropdown)',
          'color-input-dropdown-txt': 'var(--color-input-dropdown-txt)',
          'color-new-buttons': 'var(--color-new-buttons)',
          'color-rectangle-2': 'var(--color-rectangle-2)',
          'color-vector': 'var(--color-vector)',
        }),
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

const Template: Story = (args) => <ColorSwatch {...args} />;

export const Default = Template.bind({});
Default.args = {
  colorName: 'color-091c2a',
  size: 'medium',
};