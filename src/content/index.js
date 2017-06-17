import { ask, loadPacks } from './Ask.js';
import { stopAlarm } from '../shared/helpers';
import 'babel-polyfill';

console.log('working..');
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.name && (msg.trigger == "LOAD_PACK")) {
    const idPackInTraning = parseInt(msg.name.split('_')[1]);
      console.log('LOAD...', idPackInTraning);
			stopAlarm();
      ask(idPackInTraning);
	}
    return true;
});
