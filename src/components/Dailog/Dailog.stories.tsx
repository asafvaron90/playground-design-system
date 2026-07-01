import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dailog } from './Dailog';
import referencePng from './Dailog.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  title: 'Components/Dailog',
  component: Dailog,
  decorators: [withFigmaReference(referencePng), (Story) => (<div style={{ width: 277, minHeight: 317 }}><Story /></div>)],
  parameters: { layout: 'fullscreen' },
  args: {
    title: 'Notice',
    message: 'Rerunning the System Bullets AI will overwrite the previous System Bullets AI insights.',
    confirmLabel: 'Continue',
    cancelLabel: 'Cancel',
    open: true,
    variant: 'notice',
  },
} satisfies Meta<typeof Dailog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

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

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    confirmLabel: 'Proceed',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    title: 'Danger',
    message: 'This action cannot be undone. Are you sure you want to continue?',
    confirmLabel: 'Delete',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Info',
    message: 'Your session will expire in 5 minutes. Please save your work.',
    confirmLabel: 'OK',
  },
};

export const Closed: Story = {
  args: {
    open: false,
  },
};
