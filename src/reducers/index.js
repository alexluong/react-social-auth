import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux';
import reduxThunk from 'redux-thunk';

import { reducer as formReducer } from 'redux-form';
import authReducer                from './authReducer';

const reducers = combineReducers({
  auth: authReducer,
  form: formReducer
});

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);

export default store;