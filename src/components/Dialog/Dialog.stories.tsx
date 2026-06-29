import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';
import referencePng from './Dialog.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  decorators: [withFigmaReference(referencePng)],
  title: 'Components/Dialog',
  component: Dialog,
  args: {
    title: 'Notice',
    message: 'Rerunning The System Bullets AI Will Overwrite The Previous System Bullets AI Insights.',
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

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'This action may have unintended consequences.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    message: 'An error occurred. Please try again.',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Info',
    message: 'Here is some useful information for you.',
  },
};
