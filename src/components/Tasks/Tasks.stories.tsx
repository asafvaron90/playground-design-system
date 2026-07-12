// src/components/Tasks/Tasks.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Tasks } from './Tasks';
import referencePng from './Tasks.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  decorators: [withFigmaReference(referencePng, "⚠️ Needs Visual Review (94/100)")],
  title: 'Components/Tasks',
  component: Tasks,
  args: { children: 'Task content' },
} satisfies Meta<typeof Tasks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Loading: Story = { args: { isLoading: true } };
export const Disabled: Story = { args: { isDisabled: true } };