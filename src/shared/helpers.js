import uuid from 'uuid/v4'
import assoc from 'ramda/src/assoc'
import compose from 'ramda/src/compose'
import propEq from 'ramda/src/propEq'
import find from 'ramda/src/find'
import merge from 'ramda/src/merge'
import Maybe from 'folktale/maybe'

// insert in storage chrome extension
export let putStorage = (key, value) => {
  let obj = {
    [key]: value
  }
  chrome.storage.sync.set(obj, () => {
    console.log(`${key} saved`)
  })
}
/**
 * Get a random integer between `min` and `max`.
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {int} a random integer
 */
export let getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export let getChromeStorage = name => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(name, obj => {
      if (obj[name]) {
        resolve(obj[name])
      } else {
        reject(`${name} was not found`)
      }
    })
  })
}

export let cleanLevels = () => {
  chrome.storage.sync.remove('levelStep', () => {
    console.log('cleaned levels')
  })
}

/**
 * @params String
 * @description clean name in local storage
 */
export let cleanChromeStorage = (name) => {
	  chrome.storage.sync.remove(name, () => {
		    console.log('cleaned packages')
	  })
}

export let getAllKeysInStorage = () => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(null, function (items) {
      var allKeys = Object.keys(items)
      resolve(allKeys)
    })
  })
}

export const getElementById = (id, state) => find(propEq('id', id), state)
export const getElementByIdM = (id, state) => {
  const element = find(propEq('id', id), state)
  return element ? Maybe.Just(element) : Maybe.Nothing()
}

export let stopAlarm = (alarmName) => {
  chrome.runtime.sendMessage({name: alarmName, trigger: 'killAlarm'}, () => {})
}

export const sendMessageBackground = (obgMessage) => {
  chrome.runtime.sendMessage(obgMessage, () => {})
}

export let settingNewPack = (packs) => {
  const randomColor = () => getRandomInt(1, 4)
  const bootstrapPack = () => ({
    id: uuid(),
    timeMinutes: 1,
    playing: false,
    percentage: 0,
    colorProgress: '',
    colorID: randomColor(),
    isChangingColor: false,
    isSetting: false
  })

  const bootstrapCard = () => ({
    id: uuid(),
    colorID: randomColor(),
    isEditing: false
  })

  const mergeCard = pack => assoc('cards', pack.cards.map(card => merge(card, bootstrapCard())), pack)
  const mergePack = pack => merge(pack, bootstrapPack())
  return compose(mergeCard, mergePack)(packs)
}

export const runCodeAllTabs = (code) => {
  chrome.windows.getAll({
    populate: true
  }, function (windows) {
    var i = 0, w = windows.length, currentWindow;
    for( ; i < w; i++ ) {
      currentWindow = windows[i];
      var j = 0, t = currentWindow.tabs.length, currentTab;
      for( ; j < t; j++ ) {
        currentTab = currentWindow.tabs[j];
        // Skip chrome://
        if( ! currentTab.url.match(/(chrome):\/\//gi) ) {
          chrome.tabs.executeScript(currentTab.id, {
            code
          });
        }
      }
    }
  });
}

export const hideContentFluanyAllTabs = () => {
  runCodeAllTabs(
    ` document.querySelectorAll('.fluany-wrapper').forEach(function(wrapper){
        wrapper.outerHTML =  ''
      })
    `
  )
}
