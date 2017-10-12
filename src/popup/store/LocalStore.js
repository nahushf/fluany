import { task, rejected } from 'folktale/concurrency/task'

/**
 * @fileOverview The helpers functions to manage with localstorage
 * @name LocalStore.js
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */

/**
 * Save value in localstorage of extension
 * @param {String} key
 * @param {*} value
 */
export const saveInLocal = (key, value) => {
  chrome.storage.local.set({[key]: value}, () => {
    console.log(`${key} saved`)
  })
}

/**
 * Get value in localstorage of extension
 * @param {String} name
 */
export const getInLocal = (name) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(name, obj => {
      if (obj[name]) {
        resolve(obj[name])
      }
      reject(null, `${name} was not found`)
    })
  })
}

/**
 * Clean all values in localstorage of extension
 */
export const cleanLocalStorage = () => {
  chrome.storage.local.clear(function () {
    var error = chrome.runtime.lastError
    if (error) {
      console.error(error)
    }
  })
}

/**
 * A task to get data in localstorage
 */

export const getLocal = (name) => task( _ => {
    chrome.storage.local.get(name, obj => {
      if (obj[name]) {
        _.resolve(obj[name])
      }else{
        _.reject(`${name} was not found`)
      }
    })
  }
)
