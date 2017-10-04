/**
 * @fileOverview All the packs actions
 * @name pack.js<actions>
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */
import {
  ADD_PACKAGE,
  REMOVE_PACKAGE,
  CHANGE_PACKAGE_COLORID,
  CHANGE_PACKAGE_TITLE,
  CHANGE_PACKAGE_DESCRIPTION,
  IS_EDIT_PACKAGE,
  CHANGE_TIME_PACKAGE,
  IS_EDITING_CARD,
  CHANGE_PACKAGE_COLOR,
  REMOVE_CARD,
  LOAD_PACKS_LOCAL,
  CREATE_CARD,
  CHANGE_PLAY_PACK,
  PORCENT_PROGRESS_PACK,
  IMPORT_PACKAGE,
  COLOR_PROGRESS_PACK,
  ALL_NO_EDITING_CARD,
  IS_SETTING
} from 'constants/ActionTypes'

/** @typedef {Object} Action
 * @property {string} type The action type
 * @property {string} value The action value
 */

/**
 * Returns a action to add new Package in packs store
 * @param {Object} value
 * @return {Action}
 *         The action to dispatch
 */
export function addPackage(value) {
  return {
    type: ADD_PACKAGE,
    value
  }
}

/**
 * Returns a action to add all local packages in packs store
 * @param {Object} value
 * @return {Action}
 *         The action to dispatch
 */
export function loadPackLocal (value) {
  return {
    type: LOAD_PACKS_LOCAL,
    value
  }
}

/**
 * Returns a action to remove a specific pack in packs store
 * @param {String} id
 * @return {Action}
 *         The action to dispatch
 */
export function removePackage (id) {
  return {
    type: REMOVE_PACKAGE,
    id
  }
}

/**
 * Returns a action to change the title of a specific package in packs store
 * @param {String} id The package id
 * @param {String} value The title value
 * @return {Action}
 *         The action to dispatch
 */
export function changePackageTitle (id, value) {
  return {
    type: CHANGE_PACKAGE_TITLE,
    value,
    id
  }
}

/**
 * Returns a action to change the description of a specific package in packs store
 * @param {String} id The package id
 * @param {String} value The description value
 * @return {Action}
 *         The action to dispatch
 */
export function changePackageDescription (id, value) {
  return {
    type: CHANGE_PACKAGE_DESCRIPTION,
    value,
    id
  }
}

/**
 * Returns a action to change the color of a specific package in packs store
 * @param {String} value The id color
 * @param {String} id The package id
 * @return {Action}
 *         The action to dispatch
 */
export function changeColorID (value, id) {
  return {
    type: CHANGE_PACKAGE_COLORID,
    value,
    id
  }
}

/**
 * Returns a action to change the isChangingColor field in specific package is setting a package
 * @param {Boolean} value
 * @param {String} id The package id
 * @return {Action}
 *         The action to dispatch
 */
export function changePackageColor (value, id) {
  return {
    type: CHANGE_PACKAGE_COLOR,
    value,
    id
  }
}

/**
 * Returns a action to change the time of a specific package in packs store
 * @param {String} value The time value
 * @param {String} id The package id
 * @return {Action}
 *         The action to dispatch
 */
export function changeTimePackage (value, id) {
  return {
    type: CHANGE_TIME_PACKAGE,
    value,
    id
  }
}

/**
 * Returns a action to change the isSetting field in specific package is setting a package
 * @param {Boolean} value
 * @param {String} id The package id
 * @return {Action}
 *         The action to dispatch
 */
export function isSetting (value, id) {
  return {
    type: IS_SETTING,
    value,
    id
  }
}

/**
 * Returns a action to change the progress of a specific package in packs store
 * @param {Number} value The porcentage value
 * @param {String} id The package id
 * @return {Action}
 *         The action to dispatch
 */
export function changePorcentProgress (value, id) {
  return {
    type: PORCENT_PROGRESS_PACK,
    id: id,
    value
  }
}

/**
 * Returns a action to change the progress color of a specific package in packs store
 * @param {String} value The time value
 * @param {String} id The package id
 * @return {Action}
 *         The action to dispatch
 */
export function changeColorProgress (value, id) {
  return {
    type: COLOR_PROGRESS_PACK,
    id: id,
    value
  }
}

/**
 * Returns a action to change the play field of a specific package in packs store
 * @param {Boolean} value
 * @param {String} id The package id
 * @return {Action}
 *         The action to dispatch
 */
export function changePlayPack (value, id) {
  return {
    type: CHANGE_PLAY_PACK,
    value,
    id
  }
}

/**
 * Returns a action to add a new package imported in packs store
 * @param {Object} value
 * @param {String} id The package id
 * @return {Action}
 *         The action to dispatch
 */
export function importPackage (value) {
  return {
    type: IMPORT_PACKAGE,
    value
  }
}

//CARDS ACTIONS

/**
 * Returns a action to change a prop of a specific card in packs store
 * @param {Boolean} value
 * @param {String} prop The prop config
 * @param {String} id The package id
 * @param {String} indexCard The card position(index) in package
 * @return {Action}
 *         The action to dispatch
 */
export function isEditingCard (value, prop, id, indexCard) {
  return {
    type: IS_EDITING_CARD,
    value,
    prop,
    id,
    indexCard
  }
}

/**
 * Returns a action to remove card in packs store
 * @param {String} id The package id
 * @param {String} indexCard The card position(index) in package
 * @return {Action}
 *         The action to dispatch
 */
export function removeCard (id, indexCard) {
  return {
    type: REMOVE_CARD,
    id,
    indexCard
  }
}

/**
 * Returns a action to create a new card in packs store
 * @param {String} id The package id
 * @param {String} idCard The card id
 * @param {Object} value The card fields
 * @return {Action}
 *         The action to dispatch
 */
export function createCard(id, idCard, value) {
  return {
    type: CREATE_CARD,
    id,
    idCard,
    value
  }
}

/**
 * Returns a action to change all the isEditing fields to false in cards of packs store
 * @param {String} id The package id
 * @return {Action}
 *         The action to dispatch
 */
export function allNoEditingCard (id) {
  return {
    type: ALL_NO_EDITING_CARD,
    id: id
  }
}
