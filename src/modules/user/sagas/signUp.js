import { call, put, takeLatest } from 'redux-saga/effects';

import * as TYPES from '../types';
import SERVER_URI from 'config/server';
import { postAPI } from 'utilities/api';
import history from 'routes/history';

function* signUp(action) {
  yield put({ type: TYPES.SIGN_UP_REQUEST });

  try {
    const {
      payload: { username, email, password },
    } = action;

    const token = yield call(postAPI, `${SERVER_URI}/auth/local/signup`, {
      username,
      email,
      password,
    });

    yield put({
      type: TYPES.SIGN_UP_SUCCESS,
      payload: token,
    });

    history.push('sign-in');
  } catch (error) {
    // TODO: Gotta change from AUTH_ERROR to SIGN_IN_ERROR
    yield put({
      type: TYPES.SIGN_UP_FAILURE,
      payload: {
        message: error.response.data,
      },
    });
  }
}

function* signUpWatcher() {
  yield takeLatest(TYPES.SIGN_UP, signUp);
}

export default signUpWatcher;
