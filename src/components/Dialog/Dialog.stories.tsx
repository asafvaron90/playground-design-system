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

export const Loading: Story = { args: { isLoading: true } };

export const Disabled: Story = { args: { isDisabled: true } };

export const Warning: Story = { args: { variant: 'warning' } };

export const Info: Story = { args: { variant: 'info' } };

export const Error: Story = { args: { variant: 'error' } };
