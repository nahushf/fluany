import { ask, loadPacks } from './Ask.js';
import 'babel-polyfill';

loadPacks().then(() => ask());

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.message && (msg.message == "LOAD")) {
			console.log('loadQuestion....');
	}
    return true;
});
