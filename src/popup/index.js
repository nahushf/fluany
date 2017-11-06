/**
 * @fileOverview The application main to the popup.
 * @name index.js<popup>
 * @license GNU General Public License v3.0
 */

import React from 'react'
import App from './containers/App'
import configureStore from './store/configureStore'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { saveInLocal } from './store/LocalStore.js'
import './styl/app.styl'
import 'analytics/analytics'
import 'analytics/popup'

const store = configureStore()

store.subscribe(() => {
  saveInLocal('packState', store.getState().packs)
})


render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
)
