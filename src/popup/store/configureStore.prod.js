/**
 * @fileOverview The store settings to the production environment
 * @name configureStore.prod.js
 * @license GNU General Public License v3.0
 */

import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'reducers/index'

export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState)

  return store
}
