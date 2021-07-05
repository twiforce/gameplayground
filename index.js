/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

/* This is probably fixing production build */

if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    assert: () => {},
    warn: () => {},
    debug: () => {},
    error: () => {},
    time: () => {},
    timeEnd: () => {},
  };
}

import noop from 'lodash/noop';

if (!__DEV__) {
  for (const iterator of Object.keys(global.console)) {
    global.console[iterator] = noop;
  }
}
