import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Input } from './input.component';

const Component = Input;

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Component> = {
  component: Component,
  title: 'Packages/input',
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Example: Story = {
  render: () => <Component type="text" />,
};
