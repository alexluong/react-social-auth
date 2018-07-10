import { call, put, take, select, takeLatest } from 'redux-saga/effects';

import * as TYPES from '../types';
import { uploadFile, UPLOAD_FILE_SUCCESS } from 'modules/upload';
import SERVER_URI from 'config/server';
import { putAPI } from 'utilities/api';

function* updateAvatar({ payload: { avatar } }) {
  yield put({ type: TYPES.UPDATE_AVATAR_REQUEST });

  try {
    //* Upload profile image to S3
    yield put(uploadFile(avatar));
    yield take(UPLOAD_FILE_SUCCESS);

    const file = yield select(state => state.upload.file);
    const { url } = file;

    //* Save url to database
    yield call(putAPI, `${SERVER_URI}/user/avatar`, { url }, true);

    yield put({
      type: TYPES.UPDATE_AVATAR_SUCCESS,
      payload: {
        url,
      },
    });
  } catch (error) {
    yield put({
      type: TYPES.UPDATE_AVATAR_FAILURE,
      payload: {
        message: error.response.data.message,
      },
    });
  }
}

function* updateAvatarWatcher() {
  yield takeLatest(TYPES.UPDATE_AVATAR, updateAvatar);
}

export default updateAvatarWatcher;
