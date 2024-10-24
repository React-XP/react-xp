import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Divider } from './divider.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Divider> = {
  component: Divider,
  title: 'Packages/divider',
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Example: Story = {
  render: () => <Divider />,
};
