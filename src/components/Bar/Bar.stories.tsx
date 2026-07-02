import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Bar } from './Bar';
import referencePng from './Bar.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  title: 'Components/Bar',
  component: Bar,
  decorators: [withFigmaReference(referencePng), (Story) => (<div style={{ width: 375, minHeight: 74 }}><Story /></div>)],
  parameters: { layout: 'fullscreen' },
  args: {
    variant: 'Home',
    showLabels: true,
  },
} satisfies Meta<typeof Bar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Home: Story = {
  args: {
    variant: 'Home',
  },
};

export const Meetings: Story = {
  args: {
    variant: 'Meetings',
  },
};

export const Actions: Story = {
  args: {
    variant: 'Actions',
  },
};

export const Notifications: Story = {
  args: {
    variant: 'Notifications',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};
