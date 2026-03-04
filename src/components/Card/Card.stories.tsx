// Card.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    className: { control: 'text' },
    padding: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    shadow: {
      control: {
        type: 'select',
        options: ['none', 'small', 'medium', 'large'],
      },
    },
    borderRadius: {
      control: {
        type: 'select',
        options: ['none', 'small', 'medium', 'large'],
      },
    },
    header: { control: 'text' },
    footer: { control: 'text' },
    children: { control: 'text' },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  padding: 'medium',
  shadow: 'none',
  borderRadius: 'medium',
  header: 'Header Content',
  footer: 'Footer Content',
  children: 'Main Content',
};