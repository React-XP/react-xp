import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Example } from './<package-name>.component';

const Component = Example;

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Example> = {
  component: Example,
  title: 'Packages/<package-name>',
};

export default meta;
type Story = StoryObj<typeof Example>;

export const HowToUse: Story = {
  render: () => (
    <Component>This is a {'<package-name>'} component example</Component>
  ),
};
