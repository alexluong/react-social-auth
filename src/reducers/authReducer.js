import { AUTH_USER, AUTH_ERROR } from '../config/types';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, user: action.payload, authorized: true };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload, authorized: false };
    default:
      return { ...state };
  }
};

export default reducer;