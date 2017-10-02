/**
 * @fileOverview The reducers main with the all reducers combined.
 * @name index.js<reducers>
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */
import { combineReducers } from 'redux'
import packs from './packs'
import flags from './flags'

const app = combineReducers({
  packs,
  flags
})

export default app
