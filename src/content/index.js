import { ask, loadPacks } from './Ask.js';
import 'babel-polyfill';

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg, sender, sendResponse);
  if (msg.message && (msg.message == "LOAD")) {
      loadPacks().then( () => ask());
	}
    return true;
});
