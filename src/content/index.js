import { stopAlarm } from 'shared/helpers'
import { getLocal } from 'store/LocalStore'
import { ask, loadPacks } from './Ask.js'
import { of } from 'folktale/concurrency/task'
import 'babel-polyfill'
import 'analytics/analytics.js'

getLocal('questionRunning')
  .map(data => {
    ask(data.idAlarmPack, data.alarmName, data.periodInMinutes, data.card)
    return data
  })
  .run()

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.name && (msg.trigger == 'LOAD_PACK')) {
    const idPackInTraning = msg.name.split('_')[1]
    stopAlarm(msg.name)
    ask(idPackInTraning, msg.name, msg.periodInMinutes, false)
  }
  return true
})
