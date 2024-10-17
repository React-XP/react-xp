import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Box } from './box.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Box> = {
  component: Box,
  title: 'Packages/box',
};

export default meta;
type Story = StoryObj<typeof Box>;

export const HowToUse: Story = {
  render: () => <Box>This is a "box" component example</Box>,
};
