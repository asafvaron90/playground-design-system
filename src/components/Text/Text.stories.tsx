// Text.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['heading1', 'heading2', 'heading3', 'body', 'caption'],
      },
    },
    className: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'body',
  children: 'This is a text component',
};

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'heading1',
  children: 'This is a Heading 1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: 'heading2',
  children: 'This is a Heading 2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: 'heading3',
  children: 'This is a Heading 3',
};

export const Caption = Template.bind({});
Caption.args = {
  variant: 'caption',
  children: 'This is a caption text',
};