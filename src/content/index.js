import { ask } from './Ask.js';
import 'babel-polyfill';

ask();
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.message && (msg.message == "LOAD")) {
			console.log('loadQuestion....');
	}
    return true;
});
