import axios from 'axios';

// import { saveAccessToken }      from '../config/localStorage';
import { SERVER_URI }           from '../config';
import { GET_USER, AUTH_ERROR } from '../config/types';

export const getUser = token => {
  return async dispatch => {
    try {
      const response = await axios.get(`${SERVER_URI}/user/current`, {
        'headers': {'authorization': token}
      });
      console.log(response);
    } catch (error) {
      console.log(error.response);
      // dispatch(authError(error.response.data.message));
    }
  };
};

export const authError = error => {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}