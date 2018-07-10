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
    [TYPES.SIGN_IN_SUCCESS]: (state, action) => ({
      ...state,
      authenticated: true,
    }),
    [TYPES.SIGN_IN_FAILURE]: (state, action) => ({
      authenticated: false,
      role: 'guest',
      user: null,
    }),
    [TYPES.GET_USER_SUCCESS]: (state, { payload: { user } }) => ({
      ...state,
      role: (user && user.role) || 'user',
      user,
    }),
    [TYPES.GET_USER_FAILURE]: (state, { payload: { user } }) => ({
      authenticated: false,
      role: 'guest',
      user: null,
    }),
    [TYPES.UPDATE_AVATAR_SUCCESS]: (state, { payload: { url } }) => ({
      ...state,
      user: {
        ...state.user,
        photoURL: url,
      },
    }),
  },
  initialState,
);

export default reducer;
