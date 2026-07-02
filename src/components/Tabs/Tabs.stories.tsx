import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import referencePng from './Tabs.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  args: {
    activeTab: 'Home',
    showActiveIndicator: true,
  },
  decorators: [withFigmaReference(referencePng), (Story) => (<div style={{ width: 375, minHeight: 74 }}><Story /></div>)],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeTab: 'Home',
  },
};

export const HomeActive: Story = {
  args: {
    activeTab: 'Home',
    variant: 'Home',
  },
};

export const MeetingsActive: Story = {
  args: {
    activeTab: 'Meetings',
    variant: 'Meetings',
  },
};

export const ActionsActive: Story = {
  args: {
    activeTab: 'Actions',
    variant: 'Actions',
  },
};

export const NotificationsActive: Story = {
  args: {
    activeTab: 'Notifications',
    variant: 'Notifications',
  },
};

export const Disabled: Story = {
  args: {
    activeTab: 'Home',
    isDisabled: true,
  },
};

export const Loading: Story = {
  args: {
    activeTab: 'Home',
    isLoading: true,
  },
};

export const NoIndicator: Story = {
  args: {
    activeTab: 'Home',
    showActiveIndicator: false,
  },
};
