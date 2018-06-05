import axios from 'axios';

import { saveAccessToken, removeAccessToken, SERVER_URI } from 'config';
import history from 'routes/history';
import * as actions from './actions';

const getUser = token => {
  return async dispatch => {
    try {
      const response = await axios.get(`${SERVER_URI}/user/current`, {
        headers: { authorization: token },
      });
      dispatch(actions.signIn(response.data.user));
    } catch (error) {
      dispatch(actions.authError(error.response.data));
    }
  };
};

const signIn = ({ username, password }) => {
  return async dispatch => {
    try {
      const response = await axios.post(`${SERVER_URI}/auth/local/signin`, {
        username,
        password,
      });
      const token = response.data.token;
      saveAccessToken(token);
      history.push('/');
      dispatch(getUser(token));
    } catch (error) {
      dispatch(actions.authError(error.response.data));
    }
  };
};

const signUp = ({ username, email, password }) => {
  return async dispatch => {
    try {
      await axios.post(`${SERVER_URI}/auth/local/signup`, {
        username,
        email,
        password,
      });
      history.push('/sign-in');
    } catch (error) {
      dispatch(actions.authError(error.response.data));
    }
  };
};

const signOut = () => {
  return dispatch => {
    removeAccessToken();
    dispatch(actions.signOut());
  };
};

const authError = error => actions.authError(error);

const clearErrorMessage = () => actions.clearError();

export { getUser, signIn, signUp, signOut, authError, clearErrorMessage };
