import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Ppp } from './Ppp';
import referencePng from './Ppp.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  title: 'Components/Ppp',
  component: Ppp,
  decorators: [withFigmaReference(referencePng, "⚠️ Needs Visual Review (77.19381313131314/100)"), (Story) => (<div style={{ width: 108, minHeight: 44 }}><Story /></div>)],
  parameters: { layout: 'fullscreen' },
  args: {
    label: 'Confirm',
    iconPosition: 'left',
    disabled: false,
    state: 'default',
  },
} satisfies Meta<typeof Ppp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    state: 'default',
  },
};

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
    label: 'Loading...',
  },
};

const FilterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 3h12M3 7h8M5 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const WithIcon: Story = {
  args: {
    variant: 'default',
    state: 'default',
    icon: <FilterIcon />,
    iconPosition: 'left',
  },
};

export const WithIconDisabled: Story = {
  args: {
    variant: 'disabled',
    state: 'disabled',
    disabled: true,
    isDisabled: true,
    icon: <FilterIcon />,
    iconPosition: 'left',
  },
};
