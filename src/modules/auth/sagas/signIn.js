import { takeLatest, call, put, take } from 'redux-saga/effects';

import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, AUTH_ERROR } from '../types';
import { SERVER_URI } from 'config';
import { getUser, GET_USER_SUCCESS } from 'modules/user';
import { setItem } from 'config/localStorage';
import { postAPI } from 'modules/helpers';
import history from 'routes/history';

function* signIn(action) {
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

    //* Get user
    yield put(getUser(token));
    yield take(GET_USER_SUCCESS);

    yield put({
      type: SIGN_IN_SUCCESS,
    });

    //* Save token to localStorage
    setItem('token', token);

    history.push('/');
  } catch (error) {
    // TODO: Gotta change from AUTH_ERROR to SIGN_IN_ERROR
    yield put({
      type: AUTH_ERROR,
      payload: error.response.data,
    });
  }
}

function* signInWatcher() {
  yield takeLatest(SIGN_IN_REQUEST, signIn);
}

export default signInWatcher;
