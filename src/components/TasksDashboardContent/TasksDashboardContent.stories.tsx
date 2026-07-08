import type { Meta, StoryObj } from '@storybook/react';
import { TasksDashboardContent } from './TasksDashboardContent';
import referencePng from './TasksDashboardContent.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  decorators: [withFigmaReference(referencePng, "⚠️ Needs Visual Review (94.81624903749173/100)")],
  title: 'Components/TasksDashboardContent',
  component: TasksDashboardContent,
  argTypes: { onAddTask: { action: 'onAddTask' }, onEditTask: { action: 'onEditTask' }, onDeleteTask: { action: 'onDeleteTask' }, onSearchChange: { action: 'onSearchChange' }, onSortChange: { action: 'onSortChange' }, onFilterToggle: { action: 'onFilterToggle' }, onRowSelect: { action: 'onRowSelect' }, onViewChange: { action: 'onViewChange' }, theme: { control: 'select', options: ["dark","light"] } },
} satisfies Meta<typeof TasksDashboardContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Frame626444: Story = { args: { variant: "Frame 626444" } };
export const ThemeDark: Story = { args: { theme: "dark" } };
export const ThemeLight: Story = { args: { theme: "light" } };
