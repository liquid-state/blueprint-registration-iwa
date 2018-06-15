import { CODE_SUBMITTED, CODE_VALID, CODE_INVALID } from '../const';

export const codeSubmitted = ({ code }) => ({
  type: CODE_SUBMITTED,
  payload: {
    code,
  },
});

export const codeValid = () => ({
  type: CODE_VALID,
  payload: {},
});

export const codeInvalid = error => ({
  type: CODE_INVALID,
  payload: {
    error,
  },
});
