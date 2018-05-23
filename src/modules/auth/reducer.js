import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, CLEAR_AUTH_ERROR } from './types';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        user: action.payload,
        authorized: true,
        errorMessage: null
      };
    case UNAUTH_USER:
      return {
        ...state,
        authorized: false,
        errorMessage: null
      };
    case AUTH_ERROR:
      return {
        ...state,
        authorized: false,
        errorMessage: action.payload
      };
    case CLEAR_AUTH_ERROR:
      return {
        ...state,
        errorMessage: null
      }
    default:
      return { ...state };
  }
};

export default reducer;