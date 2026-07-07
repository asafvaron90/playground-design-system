// src/components/TasksContentPage/TasksContentPage.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { TasksContentPage } from './TasksContentPage';
import referencePng from './TasksContentPage.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  decorators: [withFigmaReference(referencePng)],
  title: 'Components/TasksContentPage',
  component: TasksContentPage,
  args: { children: 'Content goes here' },
} satisfies Meta<typeof TasksContentPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Loading: Story = { args: { isLoading: true } };
export const Disabled: Story = { args: { isDisabled: true } };