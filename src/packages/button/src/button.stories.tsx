import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import React from 'react';
import { Button } from './button.component';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Packages/button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const HowToUse: Story = {
  //   render: () => <Button />,
  args: {
    children: 'Button',
  },
};

export const Play: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // // 👇 Simulate interactions with the component
    // await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');

    // await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));

    // // 👇 Assert DOM structure
    // await expect(
    //   canvas.getByText(
    //     'Everything is perfect. Your account is ready and we should probably get you started!',
    //   ),
    // ).toBeInTheDocument();
  },
  args: {
    children: 'Button',
  },
};
