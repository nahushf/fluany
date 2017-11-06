/**
 * @fileOverview The store settings to the development environment
 * @name configureStore.dev.js
 * @license GNU General Public License v3.0
 */

import { createStore, applyMiddleware } from 'redux'
import devTools from 'remote-redux-devtools'
import rootReducer from 'reducers/index'

export default function configureStore (initialState) {
  const store = createStore(rootReducer, devTools({
    realtime: true
  }))
  return store
}
