import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import { saveInLocal } from './store/LocalStore.js';
import '../analytics/analytics';
import '../analytics/popup';
import './styl/app.styl';

const store = configureStore();

store.subscribe(() => {
    saveInLocal('packState', store.getState().packs);
})

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
);
