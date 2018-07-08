import { takeLatest, call, put, take } from 'redux-saga/effects';

import * as TYPES from '../types';
import LocalStorage from 'utilities/LocalStorage';
import SERVER_URI from 'config/server';
import { postAPI } from 'utilities/api';
import history from 'routes/history';

function* callGetUser(token) {
  //* Get user
  yield put({
    type: TYPES.GET_USER,
    payload: { token },
  });
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

function* socialSignIn({ payload: { token } }) {
  yield call(callGetUser, token);
}

function* signIn({ payload: { username, password }, meta: { setSubmitting } }) {
  yield put({ type: TYPES.SIGN_IN_REQUEST });

  try {
    //* Sign in
    const response = yield call(postAPI, `${SERVER_URI}/auth/local/signin`, {
      username,
      password,
    });
    const token = response.data.token;
    yield call(callGetUser, token);
  } catch (error) {
    yield put({
      type: TYPES.SIGN_IN_FAILURE,
      error: true,
      payload: {
        message: error.response.data,
      },
    });

    //* Re-enable formik form
    yield call(setSubmitting, false);
  }
}

function* signInWatcher() {
  yield takeLatest(TYPES.SIGN_IN, signIn);
  yield takeLatest(TYPES.SOCIAL_SIGN_IN, socialSignIn);
}

export default signInWatcher;
