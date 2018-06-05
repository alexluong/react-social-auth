import { put, takeLatest } from 'redux-saga/effects';

import { SIGN_OUT } from '../types';

function* signOut() {
  //* Dispatch the CLIENT_UNSET action
  // yield put(unsetClient());
  //* Clear localStorage
  // localStorage.clear();
}

function* signOutWatcher() {
  yield takeLatest(SIGN_OUT, signOut);
}

export default signOutWatcher;
