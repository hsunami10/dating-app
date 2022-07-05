import { registerRootComponent } from 'expo';

/* eslint-disable */
import 'expo-dev-client'; // https://docs.expo.dev/development/installation/#add-better-error-handlers

import App from './App';
/* eslint-enable */

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
