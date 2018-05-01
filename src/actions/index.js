import axios from 'axios';

// import { saveAccessToken }      from '../config/localStorage';
import { SERVER_URI }           from '../config';
import { AUTH_USER, AUTH_ERROR } from '../config/types';

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

export const authError = error => {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}