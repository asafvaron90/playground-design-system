import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
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
    message: 'This action may have unintended consequences. Please review before proceeding.',
    confirmLabel: 'Proceed',
    cancelLabel: 'Cancel',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    message: 'An error occurred. This action cannot be undone and will permanently delete your data.',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    message: 'This will update your settings and apply changes across all connected devices.',
    confirmLabel: 'Got It',
    cancelLabel: 'Dismiss',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    variant: 'notice',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    variant: 'notice',
  },
};

export const Closed: Story = {
  args: {
    open: false,
  },
};
