// Text.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Text, { TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['heading-1', 'heading-2', 'heading-3', 'body', 'caption'],
      },
    },
    state: {
      control: {
        type: 'select',
        options: ['default', 'active', 'disabled', 'error'],
      },
    },
    className: { control: 'text' },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Sample Text',
  variant: 'body',
  state: 'default',
};

export const Heading1 = Template.bind({});
Heading1.args = {
  children: 'Heading 1',
  variant: 'heading-1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  children: 'Heading 2',
  variant: 'heading-2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  children: 'Heading 3',
  variant: 'heading-3',
};

export const Caption = Template.bind({});
Caption.args = {
  children: 'Caption Text',
  variant: 'caption',
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  children: 'Error Text',
  state: 'error',
};
