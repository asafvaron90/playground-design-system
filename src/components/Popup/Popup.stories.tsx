import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Popup } from './Popup';
import referencePng from './Popup.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  title: 'Components/Popup',
  component: Popup,
  decorators: [withFigmaReference(referencePng), 
    (Story) => (
      <div style={{ width: 277, minHeight: 317 }}>
        <Story />
      </div>
    ),
  ],
  parameters: { layout: 'fullscreen' },
  args: {
    visible: true,
    title: 'Notice',
    message:
      'Rerunning the System Bullets AI will overwrite the previous System Bullets AI insights.',
    confirmLabel: 'Continue',
    cancelLabel: 'Cancel',
    variant: 'notice',
    iconVariant: 'notice',
    isDisabled: false,
    isLoading: false,
  },
} satisfies Meta<typeof Popup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Notice: Story = {
  args: {
    variant: 'notice',
    iconVariant: 'notice',
    title: 'Notice',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    iconVariant: 'warning',
    title: 'Warning',
    message: 'This action may have unintended consequences. Please proceed with caution.',
    confirmLabel: 'Proceed',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    iconVariant: 'danger',
    title: 'Danger',
    message: 'This will permanently delete your data. This action cannot be undone.',
    confirmLabel: 'Delete',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    iconVariant: 'info',
    title: 'Info',
    message: 'Here is some useful information you should know before continuing.',
    confirmLabel: 'Got it',
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
