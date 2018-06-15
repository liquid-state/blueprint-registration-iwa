import { fork } from 'redux-saga/effects';

import setup from './setup';

export default function* () {
  yield fork(setup);
}
