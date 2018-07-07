import { call, put, take, select, takeLatest } from 'redux-saga/effects';

import * as TYPES from '../types';
import { uploadFile, UPLOAD_FILE_SUCCESS } from 'modules/upload';
import SERVER_URI from 'config/server';
import { postAPI } from 'utilities/api';

function* updateAvatar({ payload }) {
  yield put({ type: TYPES.UPDATE_AVATAR });

  try {
    const { avatar } = payload;

    //* Upload profile image
    yield put(uploadFile(avatar));
    yield take(UPLOAD_FILE_SUCCESS);

    const file = yield select(state => state.upload.file);
    const { url, key } = file;
    yield call(postAPI, `${SERVER_URI}/user/updateAvatar`, key);
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
        error: error.message,
      },
    });
  }
}

function* updateAvatarWatcher() {
  yield takeLatest(TYPES.UPDATE_AVATAR, updateAvatar);
}

export default updateAvatarWatcher;
