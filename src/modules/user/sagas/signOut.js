import { takeLatest } from 'redux-saga/effects';

import { SIGN_OUT } from '../types';
import LocalStorage from 'utilities/LocalStorage';

function signOut() {
  LocalStorage.clearLocalStorage();
}

function* signOutWatcher() {
  yield takeLatest(SIGN_OUT, signOut);
}

export default signOutWatcher;
