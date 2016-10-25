import 'core-js/client/shim';
import 'reflect-metadata';
require('zone.js/dist/zone');

import 'ts-helpers';

// import/require the environment specific polyfills if any
if (process.env.ENV === 'build') {
  // Production
} else {
  // Development
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}