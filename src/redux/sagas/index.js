import { fork } from 'redux-saga/effects';

import setup from './setup';
import code from './code';

export default function* () {
  yield fork(setup);
  yield fork(code);
}
