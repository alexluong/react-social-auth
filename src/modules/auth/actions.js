import {
  SIGN_IN_REQUEST,
  SIGN_UP_REQUEST,
  SIGN_OUT,
  AUTH_ERROR,
  CLEAR_AUTH_ERROR,
} from './types';

const getUser = () => ({
  type: SIGN_IN_REQUEST,
});

const signIn = ({ username, password }) => ({
  type: SIGN_IN_REQUEST,
  payload: {
    username,
    password,
  },
});

const signUp = ({ username, email, password }) => ({
  type: SIGN_UP_REQUEST,
  payload: {
    username,
    email,
    password,
  },
});

const signOut = () => ({
  type: SIGN_OUT,
});

const authError = error => ({
  type: AUTH_ERROR,
  payload: error,
});

const clearErrorMessage = () => ({
  type: CLEAR_AUTH_ERROR,
});

export { getUser, signIn, signUp, signOut, authError, clearErrorMessage };
