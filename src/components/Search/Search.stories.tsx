import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search';
import referencePng from './Search.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  decorators: [withFigmaReference(referencePng)],
  title: 'Components/Search',
  component: Search,
  args: {
    placeholder: 'Search...',
    variant: 'searchBar',
    showDropdown: true,
    showDivider: true,
    showArrowIcon5426: true,
  },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SearchAI: Story = {
  args: {
    variant: 'searchAI',
    placeholder: 'Search Meetings...',
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

export const WithValue: Story = {
  args: {
    value: 'hello world',
  },
};

export const NoDropdown: Story = {
  args: {
    showArrowIcon5426: false,
    showDivider: false,
  },
};
