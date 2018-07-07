import { createActions } from 'redux-actions';
import * as TYPES from './types';

const actionCreators = createActions(
  {
    [TYPES.SIGN_IN]: [({ values }) => values, ({ actions }) => actions],
    [TYPES.SIGN_UP]: [({ values }) => values, ({ actions }) => actions],
  },
  TYPES.SOCIAL_SIGN_IN,
  TYPES.SIGN_OUT,
  TYPES.UPDATE_USER,
  TYPES.UPDATE_AVATAR,
);

export const {
  signIn,
  signUp,
  socialSignIn,
  signOut,
  updateUser,
  updateAvatar,
} = actionCreators;
