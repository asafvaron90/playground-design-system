import type { Meta, StoryObj } from '@storybook/react';
import { TasksPage } from './TasksPage';
import referencePng from './TasksPage.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  decorators: [withFigmaReference(referencePng, "⚠️ Needs Visual Review (94.81624903749173/100)")],
  title: 'Components/TasksPage',
  component: TasksPage,
  argTypes: { theme: { control: 'select', options: ["dark","light"] } },
} satisfies Meta<typeof TasksPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Frame626444: Story = { args: { variant: "Frame 626444" } };
export const ThemeDark: Story = { args: { theme: "dark" } };
export const ThemeLight: Story = { args: { theme: "light" } };
