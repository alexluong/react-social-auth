import { GET_USER_REQUEST } from './types';

const getUser = token => ({
  type: GET_USER_REQUEST,
  payload: {
    token,
  },
});

export { getUser };
