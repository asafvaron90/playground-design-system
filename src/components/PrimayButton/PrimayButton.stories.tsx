import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PrimayButton } from './PrimayButton';
import referencePng from './PrimayButton.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  title: 'Components/PrimayButton',
  component: PrimayButton,
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
    state: 'default',
    variant: 'default',
  },
} satisfies Meta<typeof PrimayButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'default',
    variant: 'default',
    showIcon: false,
  },
};

export const Pressed: Story = {
  args: {
    state: 'pressed',
    variant: 'pressed',
    showIcon: false,
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
    variant: 'disabled',
    showIcon: false,
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
    state: 'default',
    variant: 'default',
    showIcon: true,
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="2" y1="4" x2="12" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="2" y1="10" x2="8" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
};

export const DisabledWithIcon: Story = {
  args: {
    state: 'disabled',
    variant: 'disabled',
    showIcon: true,
    isDisabled: true,
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="2" y1="4" x2="12" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="2" y1="10" x2="8" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
};
