import Alarm from 'shared/Alarms'
import { updateContextToPacks } from './contextMenus'

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.tabs.query({active: true, highlighted: true}, (tabs) => {
    const objMessages = {
      name: alarm.name,
      trigger: 'LOAD_PACK',
      periodInMinutes: alarm.periodInMinutes
    }
    chrome.tabs.sendMessage(tabs[0].id, objMessages, (response) => {})
  })
})

// run only when called the questions
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  let alarm = new Alarm(msg.name, msg.periodInMinutes) // default
  if (typeof (msg.name) !== 'undefined' && msg.trigger === 'createAlarm') {
    alarm.create() // returning after answer
    alarm.check() // returning after answer
  } else if (typeof (msg.name) !== 'undefined' && msg.trigger === 'killAlarm') {
    alarm.cancel() // waiting for response
  } else if (msg.name === 'updateContextAddPackages') {
    updateContextToPacks(msg.trigger) // update context menu with packages...
  }
})
