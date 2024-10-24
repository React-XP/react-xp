import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { ComponentImport } from './<package-name>.component';

const Component = ComponentImport;

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Component> = {
  component: Component,
  title: 'Packages/<package-name>',
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Example: Story = {
  render: () => (
    <Component>This is a {'<package-name>'} component example</Component>
  ),
};
