import * as TYPES from './types';

const initialState = { file: null };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.UPLOAD_FILE_SUCCESS:
      const { url, key } = action.payload;
      return {
        file: { url, key },
      };
    default:
      return state;
  }
};

export default reducer;
