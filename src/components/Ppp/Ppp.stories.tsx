import type { Meta, StoryObj } from '@storybook/react';
import { Ppp } from './Ppp';
import referencePng from './Ppp.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  decorators: [withFigmaReference(referencePng)],
  title: 'Components/Ppp',
  component: Ppp,
  args: {
    label: 'Confirm',
  },
} satisfies Meta<typeof Ppp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Pressed: Story = {
  args: {
    variant: 'pressed',
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
