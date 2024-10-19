import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { EventsProvider } from './events.provider';
import { useEventEmitter } from './useEventEmitter.hook';
import { useEventSubscriber } from './useEventSubscriber.hook';

type TPayload = { msg: string };

const Emitter = () => {
  const { emit } = useEventEmitter<TPayload>({ key: 'key' });
  const { emit: emit2 } = useEventEmitter<TPayload>({ key: 'key2' });

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
        Emit key=key
      </button>
      <button
        type="button"
        style={{
          border: '1px solid black',
          padding: '5px',
          borderRadius: '5px',
        }}
        onClick={() => emit2({ msg: 'hello key 2' })}
      >
        Emit key=key2
      </button>
    </>
  );
};

const Subscriber1 = () => {
  const [payload, setPayload] = React.useState<TPayload>();
  useEventSubscriber<TPayload>({
    key: 'key',
    callback: ({ payload }) => setPayload(payload),
  });

  return (
    <>
      <div>Subscriber for key=[key]</div>
      <br />
      Event payload: {JSON.stringify(payload)}
    </>
  );
};

const Subscriber2 = () => {
  const [payload, setPayload] = React.useState<TPayload>();
  useEventSubscriber<TPayload>({
    key: 'key',
    callback: ({ payload }) => setPayload(payload),
  });
  useEventSubscriber<TPayload>({
    key: 'key2',
    callback: ({ payload }) => setPayload(payload),
  });

  return (
    <>
      <div>Subscriber 2 for keys=[key,key2]</div>
      <br />
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
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex' }}>
          <Subscriber1 />
        </div>
        <div style={{ display: 'flex' }}>
          <Subscriber2 />
        </div>
      </div>
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
