import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Dialog } from './dialog.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: 'Packages/dialog',
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const HowToUse: Story = {
  render: () => (
    <Dialog defaultOpen>This is a "dialog" component example</Dialog>
  ),
};
