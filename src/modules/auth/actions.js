import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, CLEAR_AUTH_ERROR } from './types';

const signIn = user => ({
  type: AUTH_USER,
  payload: user
});

const signOut = () => ({
  type: UNAUTH_USER
});

const authError = error => ({
  type: AUTH_ERROR,
  payload: error
});

const clearError = () => ({
  type: CLEAR_AUTH_ERROR
});

export {
  signIn,
  signOut,
  authError,
  clearError
};