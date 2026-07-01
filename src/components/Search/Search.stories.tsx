// src/components/Search/Search.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search';
import referencePng from './Search.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  decorators: [withFigmaReference(referencePng, "⚠️ Needs Visual Review (85/100)")],
  title: 'Components/Search',
  component: Search,
  args: { children: 'Search...' },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithSearchIcon: Story = { args: { showSearchIcon: true } };
export const WithArrowIcon: Story = { args: { showArrowIcon: true } };
export const Disabled: Story = { args: { isDisabled: true } };