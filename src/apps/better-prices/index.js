import { registerRootComponent } from 'expo';

import { App } from './app';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

// Since I'm using expo-router, this is enough.
// require('expo-router/entry');