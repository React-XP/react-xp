import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { useConsole } from './console.hook';
import { ConsoleProvider } from './console.provider';

const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      border: '1px solid #fff',
      borderRadius: '8px',
      padding: '8px',
      margin: '8px',
    }}
  >
    {children}
  </button>
);

const ConsoleChildren = () => {
  const { debug, error, log, warn } = useConsole('test');
  const {
    debug: debugAnother,
    error: errorAnother,
    log: logAnother,
    warn: warnAnother,
  } = useConsole('another');

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <br />
        <br />
        <h1 style={{ fontSize: '24px', color: '#fff' }}>Test module</h1>
        <Button
          onClick={() => debug('This is a debug message for test module')}
        >
          Debug
        </Button>
        <br />
        <Button
          onClick={() => error('This is a error message for test module')}
        >
          Error
        </Button>
        <br />
        <Button onClick={() => log('This is a log message for test module')}>
          Log
        </Button>
        <br />
        <Button onClick={() => warn('This is a warn message for test module')}>
          warn
        </Button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <br />
        <br />
        <h1 style={{ fontSize: '24px', color: '#fff' }}>Another module</h1>
        <Button
          onClick={() =>
            debugAnother('This is a debug message for another module')
          }
        >
          Debug
        </Button>
        <br />
        <Button
          onClick={() =>
            errorAnother('This is a error message for another module')
          }
        >
          Error
        </Button>
        <br />
        <Button
          onClick={() => logAnother('This is a log message for another module')}
        >
          Log
        </Button>
        <br />
        <Button
          onClick={() =>
            warnAnother('This is a warn message for another module')
          }
        >
          warn
        </Button>
      </div>
    </div>
  );
};

const Console = () => {
  const [state, setState] = React.useState({
    debug: true,
    error: true,
    log: true,
    warn: true,
  });

  console.log('state', state);

  return (
    <ConsoleProvider
      debug={{ '*': true, test: state.debug }}
      error={{ '*': true, test: state.error }}
      log={{ '*': true, test: state.log }}
      warn={{ '*': true, test: state.warn }}
    >
      <Button
        onClick={() =>
          setState((currentState) => ({
            ...currentState,
            debug: !currentState.debug,
          }))
        }
      >
        Toogle debug messages for test module
      </Button>
      <br />
      <Button
        onClick={() =>
          setState((currentState) => ({
            ...currentState,
            error: !currentState.error,
          }))
        }
      >
        Toogle error messages for test module
      </Button>
      <br />
      <Button
        onClick={() =>
          setState((currentState) => ({
            ...currentState,
            log: !currentState.log,
          }))
        }
      >
        Toogle log messages for test module
      </Button>
      <br />
      <Button
        onClick={() =>
          setState((currentState) => ({
            ...currentState,
            warn: !currentState.warn,
          }))
        }
      >
        Toogle warn messages for test module
      </Button>
      <ConsoleChildren />
    </ConsoleProvider>
  );
};

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ConsoleProvider> = {
  component: ConsoleProvider,
  title: 'Packages/Console',
};

export default meta;
type Story = StoryObj<typeof Console>;

export const Example: Story = {
  render: () => <Console />,
};
