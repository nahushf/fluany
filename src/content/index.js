import { stopAlarm } from 'shared/helpers'
import { getInLocal, saveInLocal } from 'store/LocalStore'
import { ask, loadPacks } from './Ask.js'
import 'babel-polyfill'
import 'analytics/analytics.js'

// ask('d7946a04-fdb4-4aa1-bd7b-b7c2dceedafa', 'name', 1)

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.name && (msg.trigger == 'LOAD_PACK')) {
    const idPackInTraning = msg.name.split('_')[1]
    stopAlarm(msg.name)
    ask(idPackInTraning, msg.name, msg.periodInMinutes)
  }
  return true
})
