import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        user: action.payload,
        authorized: true
      };
    case UNAUTH_USER:
      return {
        ...state,
        authorized: false
      };
    case AUTH_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        authorized: false
      };
    default:
      return { ...state };
  }
};

export default reducer;