import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tab } from './Tab';
import referencePng from './Tab.reference.png';
import { withFigmaReference } from '../../storybook/withFigmaReference';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  decorators: [withFigmaReference(referencePng), (Story) => (<div style={{ width: 375, minHeight: 74 }}><Story /></div>)],
  parameters: { layout: 'fullscreen' },
  args: {
    activeTab: 'Home',
    showLabel: true,
    disabled: false,
    isDisabled: false,
    isLoading: false,
  },
} satisfies Meta<typeof Tab>;

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
  },
};

export const MeetingsActive: Story = {
  args: {
    activeTab: 'Meetings',
  },
};

export const ActionsActive: Story = {
  args: {
    activeTab: 'Actions',
  },
};

export const NotificationsActive: Story = {
  args: {
    activeTab: 'Notifications',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    activeTab: 'Home',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    activeTab: 'Home',
  },
};

export const NoLabels: Story = {
  args: {
    activeTab: 'Home',
    showLabel: false,
  },
};
