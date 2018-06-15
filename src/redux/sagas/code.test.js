import { getContext, call, put } from 'redux-saga/effects';
import { onCodeSubmitted } from './code';
import { getPIPService } from './setup';
import { codeValid, codeInvalid } from '../actions/code';

describe('Code collection', () => {
  const identity = { logout: () => { } };
  const app = { use: () => identity };

  const pip = { authenticateViaCode: () => { } };

  it('Calls logout', () => {
    const gen = onCodeSubmitted({ code: 'abc123' });

    expect(gen.next().value).toMatchObject(getContext('app'));

    const callLogout = gen.next(app).value.CALL;
    expect(callLogout).toBeDefined();
    expect(callLogout.fn.name).toMatch('logout');
  });

  it('Accepts a valid code', () => {
    const gen = onCodeSubmitted({ code: '123456' });

    gen.next();
    gen.next(app);

    // Get pip
    expect(gen.next().value).toMatchObject(call(getPIPService));

    // Get
    const callAuthenticate = gen.next(pip).value;
    expect(callAuthenticate).toMatchObject(call(pip.authenticateViaCode, '123456'));

    const codeValidated = gen.next(true).value;
    expect(codeValidated).toMatchObject(put(codeValid()));

    expect(gen.next().done).toBeTruthy();
  });

  it('Rejects an invalid code', () => {
    const gen = onCodeSubmitted({ code: '123456' });

    gen.next();
    gen.next(app);
    gen.next();
    gen.next(pip);

    const invalid = gen.throw({ message: 'Invalid Code' });
    expect(invalid.value).toMatchObject(put(codeInvalid('Invalid Code')));

    expect(gen.next().done).toBeTruthy();
  });
});
