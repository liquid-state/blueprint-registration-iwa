import {
  REGISTRATION_SUBMITTED,
  REGISTRATION_VALIDATION_REQUIRED,
  REGISTRATION_VALIDATION_FAILED,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
} from '../const';

export const registrationSubmitted = ({ username, password }) => ({
  type: REGISTRATION_SUBMITTED,
  payload: {
    username,
    password,
  },
});

export const registrationValidationRequired = () => ({
  type: REGISTRATION_VALIDATION_REQUIRED,
  payload: {},
});

export const registrationFailed = error => ({
  type: REGISTRATION_FAILED,
  payload: {
    error,
  },
});

export const registrationSuccess = () => ({
  type: REGISTRATION_SUCCESS,
  payload: {},
});

export const registrationValidationFailed = error => ({
  type: REGISTRATION_VALIDATION_FAILED,
  payload: {
    error,
  },
});
