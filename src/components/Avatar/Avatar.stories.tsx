// Avatar.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    src: { control: 'text' },
    initials: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    shape: { control: 'select', options: ['circle', 'rounded', 'square'] },
    className: { control: 'text' },
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '',
  initials: 'AB',
  size: 'medium',
  shape: 'circle',
};

export const WithImage = Template.bind({});
WithImage.args = {
  src: 'https://via.placeholder.com/150',
  initials: '',
  size: 'medium',
  shape: 'circle',
};

export const Small = Template.bind({});
Small.args = {
  src: '',
  initials: 'AB',
  size: 'small',
  shape: 'circle',
};

export const Large = Template.bind({});
Large.args = {
  src: '',
  initials: 'AB',
  size: 'large',
  shape: 'circle',
};

export const Rounded = Template.bind({});
Rounded.args = {
  src: '',
  initials: 'AB',
  size: 'medium',
  shape: 'rounded',
};

export const Square = Template.bind({});
Square.args = {
  src: '',
  initials: 'AB',
  size: 'medium',
  shape: 'square',
};