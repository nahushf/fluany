/**
 * @fileOverview All the flags actions
 * @name flags.js<actions>
 * @author Victor Igor
 * @license MIT
 */
import {
  CHANGE_FILTER_PACKAGE,
  CHANGE_PAGINATION_PACKAGE,
  TOGGLE_ACTIVE_SEARCH,
  LOADING_EDIT_PACKAGES,
  CHANGE_CARD,
  CHANGE_MESSAGE,
  MENU_TOGGLE,
  IS_EDIT_PACKAGE,
  NEW_PACKAGE
} from 'constants/ActionTypes.js'

/** @typedef {Object} Action
  * @property {string} type The action type
  * @property {string} value The action value
  */

/**
 * Returns a action to change the filterPackage field in flags store
 * @param {String} value
 * @return {Action}
 *         The action to dispatch
 */
export function changeFilterPackage (value) {
  return {
    type: CHANGE_FILTER_PACKAGE,
    value
  }
}

/**
 * Returns a action to change the toggleActiveSearch field in flags store
 * @param {String} value
 * @return {Action}
 *         The action to dispatch
 */
export function toggleActiveSearch () {
  return {
    type: TOGGLE_ACTIVE_SEARCH
  }
}


/**
 * Returns a action to change the newPackage field in flags store
 * @param {String} value
 * @return {Action}
 *         The action to dispatch
 */
export function newPackage (value) {
  return {
    type: NEW_PACKAGE,
    value
  }
}

/**
 * Returns a action to change the paginationPackage field in flags store
 * @param {String} value
 * @return {Action}
 *         The action to dispatch
 */
export function changePagination () {
  return {
    type: CHANGE_PAGINATION_PACKAGE
  }
};

/**
 * Returns a action to change the isEditPackage field in flags store
 * @param {String} value
 * @return {Action}
 *         The action to dispatch
 */
export function isEditPackage (value) {
  return {
    type: IS_EDIT_PACKAGE,
    value
  }
}

/** Returns a action to change the cardEditing field in flags store
  * @param {String} value
  * @return {Action}
  *         The action to dispatch
*/
export function changeCard (value) {
  return {
    type: CHANGE_CARD,
    value
  }
}

/** Returns a action to change the menuToggle field in flags store
 * @param {String} value
 * @return {Action}
 *         The action to dispatch
 */
export function menuToggle (value) {
  return {
    type: MENU_TOGGLE,
    value
  }
}

/** Returns a action to change the message field in flags store
 * @param {String} value
 * @return {Action}
 *         The action to dispatch
 */
export function changeMessage (value) {
  return {
    type: CHANGE_MESSAGE,
    value
  }
}

/** Returns a action to change the editPackageLoading field in flags store
 * @param {String} value
 * @return {Action}
 *         The action to dispatch
 */
export function editPackageLoading (value) {
  return {
    type: LOADING_EDIT_PACKAGES,
    value
  }
}
