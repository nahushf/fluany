/**
 * @fileOverview The helpers functions to reducers
 * @name stateManipulate.js
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */
import { findIndex, propEq } from 'ramda'
export const getIndexThingById = (state, id) => findIndex(propEq('id', id), state)
