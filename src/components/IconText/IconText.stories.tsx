import type { Meta, StoryObj } from '@storybook/react';
import { IconText } from './IconText';

const meta: Meta<typeof IconText> = {
  title: 'Components/IconText',
  component: IconText,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'radio',
      options: ['default', 'primary', 'secondary'],
    },
    state: {
      control: 'radio',
      options: ['normal', 'disabled'],
    },
  },
};

export default meta;

export const Default: StoryObj<typeof IconText> = {
  args: {
    size: 'medium',
    variant: 'default',
    state: 'normal',
  },
};
