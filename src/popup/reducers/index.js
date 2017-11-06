/**
 * @fileOverview The reducers main with the all reducers combined.
 * @name index.js<reducers>
 * @license GNU General Public License v3.0
 */

import { combineReducers } from 'redux'
import packs from './packs'
import flags from './flags'

const app = combineReducers({
  packs,
  flags
})

export default app
