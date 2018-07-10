import * as TYPES from './types';

const uploadFile = file => ({
  type: TYPES.UPLOAD_FILE,
  payload: { file },
});

export { uploadFile };
