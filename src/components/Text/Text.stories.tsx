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

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'heading1',
  children: 'Heading 1 Text',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: 'heading2',
  children: 'Heading 2 Text',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: 'heading3',
  children: 'Heading 3 Text',
};

export const Body = Template.bind({});
Body.args = {
  variant: 'body',
  children: 'Body Text',
};

export const Caption = Template.bind({});
Caption.args = {
  variant: 'caption',
  children: 'Caption Text',
};