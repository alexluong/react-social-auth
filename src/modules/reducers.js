import { combineReducers } from 'redux';

import authReducer, { SIGN_OUT } from 'modules/auth';
import userReducer from 'modules/user';
import uploadReducer from 'modules/upload';

const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  upload: uploadReducer,
});

const rootReducer = (state, action) => {
  if (action.type === SIGN_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
