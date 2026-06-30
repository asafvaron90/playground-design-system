import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';
import referencePng from './Dialog.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  decorators: [withFigmaReference(referencePng), (Story) => (<div style={{ width: 277, minHeight: 322 }}><Story /></div>)],
  parameters: { layout: 'fullscreen' },
  args: {
    title: 'Notice',
    message: 'Rerunning the System Bullets AI will overwrite the previous System Bullets AI insights.',
    primaryLabel: 'Continue',
    cancelLabel: 'Cancel',
    open: true,
    showIcon: true,
    variant: 'default',
    isDisabled: false,
    isLoading: false,
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'This action may have unintended consequences. Please review before continuing.',
    primaryLabel: 'Proceed',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    message: 'Your settings have been updated and will take effect on next login.',
    primaryLabel: 'Got It',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    message: 'An error occurred while processing your request. Please try again.',
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

export const NoIcon: Story = {
  args: {
    showIcon: false,
    title: 'Notice',
    message: 'Rerunning the System Bullets AI will overwrite the previous System Bullets AI insights.',
  },
};

export const CustomLabels: Story = {
  args: {
    title: 'Confirm Action',
    message: 'Are you sure you want to delete this item? This cannot be undone.',
    primaryLabel: 'Delete',
    cancelLabel: 'Keep It',
    variant: 'error',
  },
};
