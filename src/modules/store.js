import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import { reducer as formReducer } from 'redux-form';
import authReducer                from 'modules/auth';

const reducers = combineReducers({
  form: formReducer,
  auth: authReducer
});

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
);

export default store;