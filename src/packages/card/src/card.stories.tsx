import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Card } from './card.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Packages/card',
};

export default meta;
type Story = StoryObj<typeof Card>;

export const HowToUse: Story = {
  render: () => <Card>This is a "card" component example</Card>,
};
