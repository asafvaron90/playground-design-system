import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Ppp } from './Ppp';
import referencePng from './Ppp.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const FilterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 3h12M3 7h8M5 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

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

export const Default: Story = {
  args: {
    variant: 'default',
    state: 'default',
    label: 'Confirm',
  },
};

export const Pressed: Story = {
  args: {
    variant: 'pressed',
    state: 'pressed',
    label: 'Confirm',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    state: 'disabled',
    disabled: true,
    label: 'Confirm',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    label: 'Confirm',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'default',
    state: 'default',
    label: 'Confirm',
    icon: <FilterIcon />,
    iconPosition: 'left',
  },
};

export const WithIconPressed: Story = {
  args: {
    variant: 'pressed',
    state: 'pressed',
    label: 'Confirm',
    icon: <FilterIcon />,
    iconPosition: 'left',
  },
};

export const WithIconDisabled: Story = {
  args: {
    variant: 'disabled',
    state: 'disabled',
    disabled: true,
    label: 'Confirm',
    icon: <FilterIcon />,
    iconPosition: 'left',
  },
};
