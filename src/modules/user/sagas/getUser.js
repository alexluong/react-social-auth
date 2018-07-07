import { call, put, takeLatest } from 'redux-saga/effects';

import * as TYPES from '../types';
import SERVER_URI from 'config/server';
import { getAPI } from 'utilities/api';
import LocalStorage from 'utilities/LocalStorage';

function* getUser() {
  yield put({ type: TYPES.GET_USER_REQUEST });
  try {
    const response = yield call(getAPI, `${SERVER_URI}/user/current`, true);
    const user = response.data.user;

    //* Save user to local storage
    LocalStorage.setItem('user', user);

    yield put({
      type: TYPES.GET_USER_SUCCESS,
      payload: { user },
    });
  } catch (error) {
    yield put({
      type: TYPES.GET_USER_FAILURE,
      payload: {
        error: error.response.data,
      },
    });
  }
}

function* getUserWatcher() {
  yield takeLatest(TYPES.GET_USER, getUser);
}

export default getUserWatcher;
