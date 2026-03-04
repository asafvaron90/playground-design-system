// Card.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
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
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a card content.',
  header: 'Card Header',
  footer: 'Card Footer',
  padding: 'medium',
  shadow: 'medium',
  borderRadius: 'medium',
};
