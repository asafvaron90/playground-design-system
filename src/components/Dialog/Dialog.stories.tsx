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
    primaryLabel: 'Continue',
    cancelLabel: 'Cancel',
    open: true,
    showIcon: true,
    variant: 'default',
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'This action may have unintended consequences.',
    primaryLabel: 'Proceed',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Info',
    message: 'Here is some useful information for you to review before continuing.',
    primaryLabel: 'Got it',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    message: 'Something went wrong. Please try again later.',
    primaryLabel: 'Retry',
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

export const WithoutIcon: Story = {
  args: {
    showIcon: false,
  },
};

export const Closed: Story = {
  args: {
    open: false,
  },
};
