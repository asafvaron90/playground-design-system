import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Ppp } from './Ppp';
import referencePng from './Ppp.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  title: 'Components/Ppp',
  component: Ppp,
  decorators: [withFigmaReference(referencePng, "⚠️ Needs Visual Review (76.79924242424242/100)"), (Story) => (<div style={{ width: 108, minHeight: 44 }}><Story /></div>)],
  parameters: { layout: 'fullscreen' },
  args: {
    label: 'Confirm',
    iconPosition: 'left',
    disabled: false,
    state: 'default',
    variant: 'default',
  },
} satisfies Meta<typeof Ppp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Pressed: Story = {
  args: {
    variant: 'pressed',
    state: 'pressed',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    state: 'disabled',
    disabled: true,
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
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 4h12M4 8h8M6 12h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    iconPosition: 'left',
  },
};

export const WithIconDisabled: Story = {
  args: {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 4h12M4 8h8M6 12h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    iconPosition: 'left',
    variant: 'disabled',
    state: 'disabled',
    disabled: true,
  },
};
