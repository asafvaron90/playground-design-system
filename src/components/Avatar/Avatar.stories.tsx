// Avatar.stories.tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from './Avatar';

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
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '',
  initials: 'AB',
  size: 'medium',
  shape: 'circle',
};