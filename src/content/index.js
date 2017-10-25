import { stopAlarm } from 'shared/helpers'
import { getInLocal, saveInLocal } from 'store/LocalStore'
import { ask, loadPacks } from './Ask.js'
import 'babel-polyfill'
import 'analytics/analytics.js'

console.log('injected..')
// ask('eb732fe3-03b5-480f-ad6d-fa5afbc0d890', 'name', 1)

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.name && (msg.trigger == 'LOAD_PACK')) {
    const idPackInTraning = msg.name.split('_')[1]
    stopAlarm(msg.name)
    ask(idPackInTraning, msg.name, msg.periodInMinutes)
  }
  return true
})
