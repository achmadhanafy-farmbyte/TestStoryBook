import React from "react";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

// This is the default configuration rn reanimated
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false
});

const AppEntryPoint = require("./.ondevice").default;

// if (true) {
//   AppEntryPoint = require("./.ondevice").default;
// }

export default AppEntryPoint;
