import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import authReducer from 'modules/auth';
import userReducer from 'modules/user';

const reducers = combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducer,
});

export default reducers;
