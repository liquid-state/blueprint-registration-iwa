import { getContext, call } from 'redux-saga/effects';
import { configureCognito } from '@liquid-state/iwa-cognito-identity';
import IdentityPlugin, { IdentityStore, JWTProvider } from '@liquid-state/iwa-identity';
import KeyValuePlugin from '@liquid-state/iwa-keyvalue';

import { Client, Service } from '@liquid-state/pip-client';

const setPermissionsForKey = key => (
  key
    .addWritePermission('iwa', 'login')
    .addWritePermission('iwa', 'registration')
    .addReadPermission('iwa', 'home')
);

/* Performs common async setup */
export default function* setupSaga() {
  const app = yield getContext('app');
  yield call(configureCognito, app, setPermissionsForKey);
  const kv = app.use(KeyValuePlugin);
  const idStore = new IdentityStore(kv, { setPermissionsForKey });
  const pipJWTProvider = new JWTProvider('pip', idStore);
  app.use(IdentityPlugin).addProvider('pip', pipJWTProvider);
}

export function* getPIPService() {
  const app = yield getContext('app');
  const als = yield call(app.alsProvider.result.bind(app.alsProvider));
  const identityProvider = app.use(IdentityPlugin).forService('pip');
  return new Service(new Client({ als }), { identityProvider });
}
