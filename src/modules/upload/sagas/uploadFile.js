import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  UPLOAD_FILE_REQUEST,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_ERROR,
} from '../types';
import { SERVER_URI, BUCKET_NAME } from 'config';
import { getAPI } from 'modules/helpers';

function uploadToS3(url, file) {
  return axios.put(url, file, {
    headers: {
      'Content-Type': file.type,
    },
  });
}

function* uploadFile({ payload }) {
  try {
    //* Get presigned signature
    const response = yield call(getAPI, `${SERVER_URI}/upload`, true);
    const { url, key } = response.data;

    //* Upload to S3
    const { file } = payload;
    yield call(uploadToS3, url, file);

    const fileURL = `https://s3.amazonaws.com/${BUCKET_NAME}/${key}`;
    /**
     * ! We want to save the key (fileURL) to our database
     * ! We can now do what we wanna do with the fileURL!!!
     */

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
