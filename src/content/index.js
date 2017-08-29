import { ask, loadPacks } from './Ask.js';
import { stopAlarm } from '../shared/helpers';
import 'babel-polyfill';

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.name && (msg.trigger == "LOAD_PACK")) {
    const idPackInTraning = msg.name.split('_')[1];
    stopAlarm(msg.name);
    ask(idPackInTraning, msg.name, msg.periodInMinutes);
	}
    return true;
});
