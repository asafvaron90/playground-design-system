import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryButton } from './PrimaryButton';
import referencePng from './PrimaryButton.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
  decorators: [withFigmaReference(referencePng, "⚠️ Needs Visual Review (76.79924242424242/100)"), 
    (Story) => (
      <div style={{ width: 108, minHeight: 44 }}>
        <Story />
      </div>
    ),
  ],
  parameters: { layout: 'fullscreen' },
  args: {
    label: 'Confirm',
    showIcon: false,
    variant: 'default',
    isDisabled: false,
    isLoading: false,
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Pressed: Story = {
  args: {
    variant: 'pressed',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    isDisabled: true,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const WithIcon: Story = {
  args: {
    showIcon: true,
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="3" width="12" height="1.5" rx="0.75" fill="currentColor" />
        <rect x="3" y="6.5" width="8" height="1.5" rx="0.75" fill="currentColor" />
        <rect x="5" y="10" width="4" height="1.5" rx="0.75" fill="currentColor" />
      </svg>
    ),
  },
};

export const WithIconDisabled: Story = {
  args: {
    showIcon: true,
    variant: 'disabled',
    isDisabled: true,
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="3" width="12" height="1.5" rx="0.75" fill="currentColor" />
        <rect x="3" y="6.5" width="8" height="1.5" rx="0.75" fill="currentColor" />
        <rect x="5" y="10" width="4" height="1.5" rx="0.75" fill="currentColor" />
      </svg>
    ),
  },
};
