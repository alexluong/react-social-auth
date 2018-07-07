import { all } from 'redux-saga/effects';

import signInWatcher from './signIn';
import signUpWatcher from './signUp';
import signOutWatcher from './signOut';
import getUserWatcher from './getUser';
import updateAvatarWatcher from './updateAvatar';

export function* userSaga() {
  yield all([
    signInWatcher(),
    signUpWatcher(),
    signOutWatcher(),
    getUserWatcher(),
    updateAvatarWatcher(),
  ]);
}
