import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Toast } from './toast.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Toast> = {
  component: Toast,
  title: 'Packages/toast',
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const HowToUse: Story = {
  render: () => <Toast />,
};
