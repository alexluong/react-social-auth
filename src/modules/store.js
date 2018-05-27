import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';

import { reducer as formReducer } from 'redux-form';
import authReducer                from 'modules/auth';

const reducers = combineReducers({
  form: formReducer,
  auth: authReducer
});

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
  reducers,
  {},
  enhancers
);

export default store;