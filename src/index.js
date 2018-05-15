import 'config/theme';

import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { Provider }                     from 'react-redux';

import store from 'modules/store';
import App   from 'routes/App';

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);