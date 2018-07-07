import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import throttle from 'lodash/throttle';
import LocalStorage from 'utilities/LocalStorage';

import sagas from 'modules/sagas';
import reducers from 'modules/reducers';

//* Middlewares
const sagaMiddleware = createSagaMiddleware();
const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

//* Get persisted state
const persistedState = LocalStorage.getItem('state');

//* Create store
const store = createStore(reducers, persistedState, enhancers);
sagaMiddleware.run(sagas);

//* Persist
store.subscribe(
  throttle(() => {
    const { auth, user } = store.getState();

    if (auth.authenticated) {
      LocalStorage.setItem('state', { auth, user });
    }
  }, 1000),
);

export default store;
