import { takeLatest, call, put, take } from 'redux-saga/effects';

import * as TYPES from '../types';
import LocalStorage from 'utilities/LocalStorage';
import SERVER_URI from 'config/server';
import { postAPI } from 'utilities/api';
import history from 'routes/history';

function* callGetUser(token) {
  //* Get user
  yield put({ type: TYPES.GET_USER });
  yield take(TYPES.GET_USER_SUCCESS);

  /**
   * * Now that we're signed in
   * * We can save token to local storage
   */
  LocalStorage.setItem('accessToken', token);

  yield put({
    type: TYPES.SIGN_IN_SUCCESS,
  });

  history.push('/');
}

function* socialSignIn(action) {
  const {
    payload: { token },
  } = action;

  yield call(callGetUser, token);
}

function* signIn(action) {
  yield put({ type: TYPES.SIGN_IN_REQUEST });

  try {
    const {
      payload: { username, password },
    } = action;

    //* Sign in
    const response = yield call(postAPI, `${SERVER_URI}/auth/local/signin`, {
      username,
      password,
    });
    const token = response.data.token;

    yield call(callGetUser, token);
  } catch (error) {
    // TODO: Gotta change from AUTH_ERROR to SIGN_IN_ERROR
    yield put({
      type: TYPES.SIGN_IN_FAILURE,
      payload: error.response.data,
    });
  }
}

function* signInWatcher() {
  yield takeLatest(TYPES.SIGN_IN, signIn);
  yield takeLatest(TYPES.SOCIAL_SIGN_IN, socialSignIn);
}

export default signInWatcher;
