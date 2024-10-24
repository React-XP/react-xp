import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { useToast } from './toast.hook';
import { ToastProvider } from './toast.provider';

const HowToUseToast = () => {
  const { toast } = useToast();

  return (
    <div>
      <h1>Toasts</h1>
      <button
        type="button"
        style={{
          border: '1px solid #000',
          borderRadius: '8px',
          padding: '8px',
          margin: '8px',
        }}
        onClick={() => toast({ title: 'This is a toast example' })}
      >
        Show toast with title
      </button>
      <br />
      <button
        type="button"
        style={{
          border: '1px solid #000',
          borderRadius: '8px',
          padding: '8px',
          margin: '8px',
        }}
        onClick={() =>
          toast({
            title: 'This is a toast example',
            description: 'This is a toast description',
          })
        }
      >
        Show toast with title and description
      </button>
    </div>
  );
};

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ToastProvider> = {
  component: ToastProvider,
  title: 'Packages/toast',
};

export default meta;
type Story = StoryObj<typeof ToastProvider>;

export const Example: Story = {
  render: () => (
    <ToastProvider>
      <HowToUseToast />
    </ToastProvider>
  ),
};
