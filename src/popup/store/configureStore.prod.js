/**
 * @fileOverview The store settings to the production environment
 * @name configureStore.prod.js
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */

import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'reducers/index'

export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState)

  return store
}
