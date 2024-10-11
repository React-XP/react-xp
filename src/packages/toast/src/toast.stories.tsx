import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Example } from './toast.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Example> = {
  component: Example,
  title: 'Packages/toast',
};

export default meta;
type Story = StoryObj<typeof Example>;

export const HowToUse: Story = {
  render: () => <Example />,
};
