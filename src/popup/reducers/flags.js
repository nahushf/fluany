/**
 * @fileOverview All reducers of flags, they provide a separate reducer function to manage each individual data slice.
 * @name flags.js<reducers>
 * @license GNU General Public License v3.0
 */

import toLower from 'ramda/src/toLower'
import { CHANGE_FILTER_PACKAGE,
         TOGGLE_ACTIVE_SEARCH,
         PROFILE_TOGGLE,
				 IS_EDIT_PACKAGE,
         CHANGE_PAGINATION_PACKAGE,
         CHANGE_CARD,
         LOADING_EDIT_PACKAGES,
         CHANGE_MESSAGE,
         NEW_PACKAGE } from 'constants/ActionTypes'

const assign = Object.assign

let defaultState = {
  isCreatingPackage: false,
  editPackageLoading: false,
  message: {
    error: false,
    success: false,
    info: ''
  },
  filterPackage: '',
  isActiveSearch: false,
  paginationPackage: 3,
  isEditPackage: {newPackage: false, packageid: null},
  newPackage: {title: '', description: ''},
  cardEditing: {front: null, back: null},
  profileToggle: false
}

const flags = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_FILTER_PACKAGE:
      return assign({}, state, {filterPackage: toLower(action.value)})
    case TOGGLE_ACTIVE_SEARCH:
      return assign({}, state, {isActiveSearch: !state.isActiveSearch})
    case CHANGE_PAGINATION_PACKAGE:
      return assign({}, state, {paginationPackage: state.paginationPackage + 2})
    case IS_EDIT_PACKAGE:
      return assign({}, state, {isEditPackage: action.value})
    case NEW_PACKAGE:
      return assign({}, state, {newPackage: action.value})
    case CHANGE_CARD:
      return assign({}, state, {cardEditing: action.value})
    case CHANGE_MESSAGE:
      return assign({}, state, { message: {...state.message, ...action.value }})
    case LOADING_EDIT_PACKAGES:
      return assign({}, state, { editPackageLoading: action.value })
    case PROFILE_TOGGLE:
      return assign({}, state, { profileToggle: !state.profileToggle })
    default:
      return state
  }
}

export default flags
