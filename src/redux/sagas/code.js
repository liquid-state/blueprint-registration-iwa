import { getContext, takeLatest, call, put, take } from 'redux-saga/effects';
import { push, replace as _replace } from 'react-router-redux';
import IdentityPlugin from '@liquid-state/iwa-identity';
import { getPIPService } from './setup';
import { CODE_SUBMITTED, CODE_VALID } from '../const';
import { codeValid, codeInvalid } from '../actions/code';

export default function* codeSaga() {
  yield takeLatest(CODE_SUBMITTED, onCodeSubmitted);

  yield navigateOn(CODE_VALID, { to: '/register', replace: true });
}

function* navigateOn(action, { to, replace }) {
  let navigation = push;
  if (replace) {
    navigation = _replace;
  }
  while (yield take(action)) {
    yield put(navigation(to));
  }
}

export function* onCodeSubmitted({ code }) {
  const app = yield getContext('app');
  // Clear all existing credentials.
  const idp = app.use(IdentityPlugin);
  yield call(idp.logout.bind(idp));

  const pip = yield call(getPIPService);

  try {
    yield call(pip.authenticateViaCode, code);
    yield put(codeValid());
  } catch (e) {
    const error = e.message ? e.message : e;
    yield put(codeInvalid(error));
  }
}
