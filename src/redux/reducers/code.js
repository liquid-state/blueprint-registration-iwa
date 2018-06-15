import { CODE_SUBMITTED, CODE_VALID, CODE_INVALID } from '../const';

const initialState = {
  code: null,
  error: null,
  validating: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CODE_SUBMITTED:
      return { code: action.payload.code, validating: true, error: null };

    case CODE_VALID:
      return { validating: false };

    case CODE_INVALID:
      return { validating: false, error: action.payload.error };

    default:
      return state;
  }
};

