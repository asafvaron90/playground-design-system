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
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    shape: { control: { type: 'select', options: ['circle', 'rounded', 'square'] } },
    className: { control: 'text' },
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  initials: 'JD',
  size: 'medium',
  shape: 'circle',
};

export const WithImage = Template.bind({});
WithImage.args = {
  src: 'https://via.placeholder.com/150',
  size: 'medium',
  shape: 'circle',
};