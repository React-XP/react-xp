# Console

This package simplify print logs in console, using methods: debug, log and warn.
Allow to disable some modules, or types of methods.

```js
// This configuration allow all modules log, and only "test" module not print log messages
<ConsoleProvider debug={true} log={{ '*': true, test: false }} warn={true}>
  test
</ConsoleProvider>
```

```js
const { debug, log } = useConsole({ module: 'test' });
const { warn } = useConsole({ module: 'test 2' });

debug('This is a debug message for test module');

log('This is a log message for test module');

warn('This is a warn message for test 2 module');
```
