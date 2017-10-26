import { stopAlarm } from 'shared/helpers'
import { getInLocal, saveInLocal } from 'store/LocalStore'
import { ask, loadPacks } from './Ask.js'
import 'babel-polyfill'
import 'analytics/analytics.js'

// ask('8f460d41-655e-4bfd-a096-1e2fdad1b722', 'name', 1)

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.name && (msg.trigger == 'LOAD_PACK')) {
    const idPackInTraning = msg.name.split('_')[1]
    stopAlarm(msg.name)
    ask(idPackInTraning, msg.name, msg.periodInMinutes)
  }
  return true
})
