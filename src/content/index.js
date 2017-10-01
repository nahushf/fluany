import { stopAlarm } from 'shared/helpers';
import { ask, loadPacks } from './Ask.js';
import 'babel-polyfill';
import 'analytics/analytics.js';

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.name && (msg.trigger == "LOAD_PACK")) {
    const idPackInTraning = msg.name.split('_')[1];
    stopAlarm(msg.name);
    ask(idPackInTraning, msg.name, msg.periodInMinutes);
	}
    return true;
});
