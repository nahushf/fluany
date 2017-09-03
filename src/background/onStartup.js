import { saveInLocal } from '../popup/store/LocalStore';
chrome.runtime.onInstalled.addListener(() => {
  console.log('saved..')
  chrome.tabs.getAllInWindow(null, (tabs) => {
    for (var i = 0; i < tabs.length; i++) {
      chrome.tabs.executeScript(tabs[i].id, {file: "content/index.js"});
    }
  });
})
