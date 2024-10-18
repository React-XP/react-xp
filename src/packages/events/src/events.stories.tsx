import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { EventsProvider } from './events.provider';
import { useEventEmitter } from './useEventEmitter.hook';
import { useEventSubscriber } from './useEventSubscriber.hook';

type TPayload = { msg: string };

const Emitter = () => {
  const { emit } = useEventEmitter<TPayload>({ key: 'key' });

  return (
    <>
      <div>Emitter</div>
      <button
        type="button"
        style={{
          border: '1px solid black',
          padding: '5px',
          borderRadius: '5px',
        }}
        onClick={() => emit({ msg: 'hello' })}
      >
        Emit
      </button>
    </>
  );
};

const Subscriber = () => {
  const [payload, setPayload] = React.useState<TPayload>();
  useEventSubscriber<TPayload>({
    key: 'key',
    callback: ({ payload }) => setPayload(payload),
  });

  return (
    <>
      <div>Subscriber</div>
      Event payload: {JSON.stringify(payload)}
    </>
  );
};

const Component = () => {
  return (
    <EventsProvider
      onEvent={(event) => {
        alert(`new event ${JSON.stringify(event)}`);
      }}
    >
      This is a {'events'} example
      <br />
      <Emitter />
      <Subscriber />
    </EventsProvider>
  );
};

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof EventsProvider> = {
  component: EventsProvider,
  title: 'Packages/events',
};

export default meta;
type Story = StoryObj<typeof EventsProvider>;

export const HowToUse: Story = {
  render: () => <Component />,
};
