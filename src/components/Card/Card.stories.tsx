// Card.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    padding: { control: 'text' },
    shadow: { control: 'text' },
    borderRadius: { control: 'text' },
    header: { control: 'text' },
    footer: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['default', 'outlined', 'elevated'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args}>Card Content</Card>;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'medium',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  size: 'medium',
};

export const Elevated = Template.bind({});
Elevated.args = {
  variant: 'elevated',
  size: 'medium',
};
