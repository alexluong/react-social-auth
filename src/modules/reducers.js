import { combineReducers } from 'redux';

import userReducer, { SIGN_OUT } from './user';
import uploadReducer from './upload';
import uiReducer from './ui';

const appReducer = combineReducers({
  user: userReducer,
  upload: uploadReducer,
  ui: uiReducer,
});

const rootReducer = (state, action) => {
  if (action.type === SIGN_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
