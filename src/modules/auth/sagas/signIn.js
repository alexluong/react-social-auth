import axios from 'axios';
import {
  all,
  take,
  fork,
  cancel,
  call,
  put,
  cancelled,
} from 'redux-saga/effects';

import { SERVER_URI } from 'config';
import history from 'routes/history';
import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, AUTH_ERROR } from '../types';

async function signInAPI({ username, password }) {
  return await axios.post(`${SERVER_URI}/auth/local/signin`, {
    username,
    password,
  });
}

function* signIn({ username, password }) {
  let token;
  try {
    const response = yield call(signInAPI, { username, password });
    token = response.data.token;

    // yield put(setClient(token));
    yield put({
      type: SIGN_IN_SUCCESS,
    });

    // set a stringified version of our token to localstorage on our domain
    // localStorage.setItem('token', JSON.stringify(token));

    history.push('/');
  } catch (error) {
    yield put({
      type: AUTH_ERROR,
      payload: error.response.data,
    });
  } finally {
    if (yield cancelled()) {
      history.push('/login');
    }
  }
  return token;
}

function* signInWatcher() {
  while (1) {
    const {
      payload: { username, password },
    } = yield take(SIGN_IN_REQUEST);
    const task = yield fork(signIn, { username, password });
    // const action = yield take([CLIENT_UNSET, LOGIN_ERROR])
    // if (action.type === CLIENT_UNSET) yield cancel(task)
    // yield call(logout)
  }
}

export default signInWatcher;
