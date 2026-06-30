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
    open: true,
    variant: 'notice',
    title: 'Notice',
    message: 'Rerunning the System Bullets AI will overwrite the previous System Bullets AI insights.',
    confirmLabel: 'Continue',
    cancelLabel: 'Cancel',
    isDisabled: false,
    isLoading: false,
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Notice: Story = {
  args: {
    variant: 'notice',
    title: 'Notice',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'This action may have unintended consequences. Please proceed with caution.',
    confirmLabel: 'Proceed',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    message: 'An error has occurred. This action cannot be undone.',
    confirmLabel: 'Delete',
    cancelLabel: 'Go Back',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    message: 'Your session will expire in 5 minutes. Would you like to continue?',
    confirmLabel: 'Stay Logged In',
    cancelLabel: 'Log Out',
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

export const Closed: Story = {
  args: {
    open: false,
  },
};
