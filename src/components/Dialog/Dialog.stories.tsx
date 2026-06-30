import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Dialog } from './Dialog';
import referencePng from './Dialog.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  decorators: [withFigmaReference(referencePng), 
    (Story) => (
      <div style={{ width: 277, minHeight: 322 }}>
        <Story />
      </div>
    ),
  ],
  parameters: { layout: 'fullscreen' },
  args: {
    title: 'Notice',
    message: 'Rerunning the System Bullets AI will overwrite the previous System Bullets AI insights.',
    confirmLabel: 'Continue',
    cancelLabel: 'Cancel',
    open: true,
    variant: 'notice',
  },
} satisfies Meta<typeof Dialog>;

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

export const Notice: Story = {
  args: {
    variant: 'notice',
    title: 'Notice',
    message: 'Rerunning the System Bullets AI will overwrite the previous System Bullets AI insights.',
    confirmLabel: 'Continue',
    cancelLabel: 'Cancel',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'This action may cause irreversible changes. Please proceed with caution.',
    confirmLabel: 'Proceed',
    cancelLabel: 'Cancel',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    message: 'An error occurred while processing your request. Please try again.',
    confirmLabel: 'Retry',
    cancelLabel: 'Dismiss',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    message: 'Your session will expire in 5 minutes. Would you like to extend it?',
    confirmLabel: 'Extend',
    cancelLabel: 'Sign Out',
  },
};

export const Closed: Story = {
  args: {
    open: false,
  },
};
