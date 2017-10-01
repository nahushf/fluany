import { findIndex, propEq } from 'ramda'
export const getIndexThingById = (state, id) => findIndex(propEq('id', id), state)
