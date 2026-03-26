// StatusBar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { StatusBar } from './StatusBar';

const meta = {
  title: 'Components/StatusBar',
  component: StatusBar,
  args: {
    time: '9:41',
    batteryIcon: '􀛨',
    wifiIcon: '􀙇',
  },
} satisfies Meta<typeof StatusBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
