import { all } from 'redux-saga/effects';

import { userSaga } from './user';
import { uploadSaga } from './upload';

export default function* sagas() {
  yield all([userSaga(), uploadSaga()]);
}
