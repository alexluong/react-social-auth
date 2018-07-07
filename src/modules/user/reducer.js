import { handleActions } from 'redux-actions';
import * as TYPES from './types';

//* Initial state
const initialState = {
  user: null,
  role: 'guest',
  error: '',
};

//* Reducers
const reducer = handleActions(
  {
    [TYPES.SIGN_IN_SUCCESS]: (state, payload) => ({
      ...state,
      authenticated: true,
    }),
    [TYPES.SIGN_IN_FAILURE]: (state, payload) => ({
      authenticated: false,
      role: 'guest',
      user: null,
    }),
    [TYPES.GET_USER_SUCCESS]: (state, { user }) => ({
      ...state,
      role: (user && user.role) || 'user',
      user,
    }),
    [TYPES.GET_USER_FAILURE]: (state, { user }) => ({
      authenticated: false,
      role: 'guest',
      user: null,
    }),
  },
  initialState,
);

export default reducer;
