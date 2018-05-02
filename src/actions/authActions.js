import axios from 'axios';

import { removeAccessToken } from '../config';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  SERVER_URI
} from '../config';

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
      dispatch(authError(error.data));
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