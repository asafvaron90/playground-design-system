// Avatar.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    src: { control: 'text' },
    initials: { control: 'text' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    shape: {
      control: {
        type: 'select',
        options: ['circle', 'rounded', 'square'],
      },
    },
    className: { control: 'text' },
  },
} as Meta;

const Template: Story = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '',
  initials: 'JD',
  size: 'medium',
  shape: 'circle',
};

export const WithImage = Template.bind({});
WithImage.args = {
  src: 'https://via.placeholder.com/150',
  initials: 'JD',
  size: 'medium',
  shape: 'circle',
};

export const WithInitials = Template.bind({});
WithInitials.args = {
  src: '',
  initials: 'JD',
  size: 'medium',
  shape: 'circle',
};