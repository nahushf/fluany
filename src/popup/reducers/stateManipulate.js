/**
 * @fileOverview The helpers functions to reducers
 * @name stateManipulate.js
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */
import findIndex from 'ramda/src/findIndex'
import propEq from 'ramda/src/propEq'
export const getIndexThingById = (state, id) => findIndex(propEq('id', id), state)
