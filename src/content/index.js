import { ask, loadPacks } from './Ask.js';
import { stopAlarm } from '../shared/helpers';
import 'babel-polyfill';

console.log('working..');
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.message && (msg.message == "LOAD")) {
			stopAlarm();
      loadPacks().then( () => ask());
	}
    return true;
});
