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

export const Example: Story = {
  render: () => (
    <>
      <div>Block 1</div>
      <div style={{ border: '1px solid red' }}>
        <Spacer size={1} />
      </div>
      <div>Block 2</div>
    </>
  ),
};
