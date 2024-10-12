import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Spacer } from './spacer.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Spacer> = {
  component: Spacer,
  title: 'Packages/spacer',
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const HowToUse: Story = {
  render: () => <Spacer size={1} />,
};
