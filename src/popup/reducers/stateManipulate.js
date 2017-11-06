/**
 * @fileOverview The helpers functions to reducers
 * @name stateManipulate.js
 * @license GNU General Public License v3.0
 */

import findIndex from 'ramda/src/findIndex'
import propEq from 'ramda/src/propEq'
export const getIndexThingById = (state, id) => findIndex(propEq('id', id), state)
