// src/components/Tab/Tab.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';
import referencePng from './Tab.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  decorators: [withFigmaReference(referencePng)],
  title: 'Components/Tab',
  component: Tab,
  args: {
    children: 'Home',
    variant: 'Home',
  },
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Meetings: Story = { args: { variant: 'Meetings', children: 'Meetings' } };
export const Actions: Story = { args: { variant: 'Actions', children: 'Actions' } };
export const Notifications: Story = { args: { variant: 'Notifications', children: 'Notifications' } };
export const Disabled: Story = { args: { isDisabled: true } };
export const Loading: Story = { args: { isLoading: true } };