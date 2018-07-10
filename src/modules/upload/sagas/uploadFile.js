import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import * as TYPES from '../types';
import BUCKET_NAME from 'config/s3Bucket';
import SERVER_URI from 'config/server';
import { getAPI } from 'utilities/api';

function uploadToS3(url, file) {
  return axios.put(url, file, {
    headers: {
      'Content-Type': file.type,
    },
  });
}

function* uploadFile({ payload: { file } }) {
  yield put({ type: TYPES.UPLOAD_FILE_REQUEST });

  try {
    //* Get presigned signature
    const response = yield call(getAPI, `${SERVER_URI}/upload`, true);
    const { url, key } = response.data; // url is presigned signature url

    //* Upload to S3
    yield call(uploadToS3, url, file);
    const fileURL = `https://s3.amazonaws.com/${BUCKET_NAME}/${key}`;
    /**
     * We now have the key (file name)
     * We can either save it or the actual fileURL to our database
     * And we can do whatever we wanna with the url
     */

    yield put({
      type: TYPES.UPLOAD_FILE_SUCCESS,
      payload: { url: fileURL, key },
    });
  } catch (error) {
    yield put({
      type: TYPES.UPLOAD_FILE_FAILURE,
      error: true,
      payload: {
        message: error.response.data,
      },
    });
  }
}

function* uploadFileWatcher() {
  yield takeLatest(TYPES.UPLOAD_FILE, uploadFile);
}

export default uploadFileWatcher;
