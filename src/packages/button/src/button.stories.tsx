import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Button } from './button.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Packages/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const HowToUse: Story = {
  //   render: () => <Button />,
  args: {
    children: 'Button',
  },
};
