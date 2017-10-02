/**
 * @fileOverview The store settings to the development environment
 * @name configureStore.dev.js
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
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
