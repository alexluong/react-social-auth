import { takeLatest, call, put } from 'redux-saga/effects';

import {
  UPLOAD_FILE_REQUEST,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_ERROR,
} from '../types';
import { SERVER_URI } from 'config';
import { postAPI } from 'modules/helpers';

function* uploadFile(action) {
  try {
    const {
      payload: { file, name },
    } = action;
    console.log(file);
    const response = yield call(
      postAPI,
      `${SERVER_URI}/upload`,
      { name },
      true,
    );
    const fileURL = response.data.fileURL;
    console.log(fileURL);

    yield put({
      type: UPLOAD_FILE_SUCCESS,
      payload: { fileURL },
    });
  } catch (error) {
    yield put({
      type: UPLOAD_FILE_ERROR,
      payload: error.response.data,
    });
  }
}

function* uploadFileWatcher() {
  yield takeLatest(UPLOAD_FILE_REQUEST, uploadFile);
}

export default uploadFileWatcher;
