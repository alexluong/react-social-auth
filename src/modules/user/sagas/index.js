import { all } from 'redux-saga/effects';

import getUserWatcher from './getUser';

export function* userSaga() {
  yield all([getUserWatcher()]);
}
