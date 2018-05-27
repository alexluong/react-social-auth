import axios from 'axios';

import { saveAccessToken, removeAccessToken, SERVER_URI } from 'config';
import history from 'routes/history';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, CLEAR_AUTH_ERROR } from './types';

export const getUser = token => {
  return async dispatch => {
    try {
      const response = await axios.get(`${SERVER_URI}/user/current`, {
        'headers': {'authorization': token}
      });
      dispatch({
        type: AUTH_USER,
        payload: response.data.user
      });
    } catch (error) {
      dispatch(authError(error.response.data));
    }
  };
};

export const signIn = ({ username, password }) => {
  return async dispatch => {
    try {
      const response = await axios.post(`${SERVER_URI}/auth/local/signin`, { username, password });
      const token    = response.data.token;
      saveAccessToken(token);
      history.push('/');
      dispatch(getUser(token));
    } catch (error) {
      dispatch(authError(error.response.data));
    }
  };
};

export const signUp = ({ username, email, password }) => {
  return async dispatch => {
    try {
      await axios.post(`${SERVER_URI}/auth/local/signup`, { username, email, password });
      history.push('/sign-in');
    } catch (error) {
      dispatch(authError(error.response.data));
    }
  };
};

export const signOut = () => {
  return dispatch => {
    removeAccessToken();
    dispatch({ type: UNAUTH_USER });
  };
};

export const authError = error => {
  return {
    type: AUTH_ERROR,
    payload: error
  };
};

export const clearErrorMessage = () => {
  return {
    type: CLEAR_AUTH_ERROR
  }
}