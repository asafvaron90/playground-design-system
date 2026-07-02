// src/components/Bar/Bar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Bar } from './Bar';
import referencePng from './Bar.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  decorators: [withFigmaReference(referencePng)],
  title: 'Components/Bar',
  component: Bar,
  args: { children: 'Home' },
} satisfies Meta<typeof Bar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Meetings: Story = { args: { variant: 'Meetings', children: 'Meetings' } };
export const Actions: Story = { args: { variant: 'Actions', children: 'Actions' } };
export const Notifications: Story = { args: { variant: 'Notifications', children: 'Notifications' } };