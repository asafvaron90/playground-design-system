// full .stories.tsx file content based on the template
import type { Meta, StoryObj } from '@storybook/react';
import { MenuActionItemSingle } from './MenuActionItemSingle';

const meta: Meta<typeof MenuActionItemSingle> = {
  title: 'Components/MenuActionItemSingle',
  component: MenuActionItemSingle,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'radio',
      options: ['default', 'selected'],
    },
    state: {
      control: 'radio',
      options: ['enabled', 'disabled'],
    },
  },
};

export default meta;

export const Default: StoryObj<typeof MenuActionItemSingle> = {
  args: {
    size: 'medium',
    variant: 'default',
    state: 'enabled',
  },
};