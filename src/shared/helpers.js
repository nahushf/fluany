//insert in storage chrome extension
export let putStorage = (key, value) => {
	let obj = {
		[key]: value
	};
	chrome.storage.sync.set(obj, () => {
		console.log(`${key} saved`);
	});
};
/**
 * Get a random integer between `min` and `max`.
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {int} a random integer
 */
export let getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export let getChromeStorage = name => {
  return new Promise( (resolve, reject) => {
		chrome.storage.sync.get(name, obj => {
			if(obj[name]){
				resolve(obj[name]);
			}else
				reject(`${name} was not found`);
		});
	});
};

export let cleanLevels = () => {
	chrome.storage.sync.remove('levelStep', () => {
		console.log('cleaned levels');
	});
};

/**
 * @params String
 * @description clean name in local storage
 */
export let cleanChromeStorage = (name) => {
	  chrome.storage.sync.remove(name, () => {
		    console.log('cleaned packages');
	  });
};

export let getAllKeysInStorage = () => {
	return new Promise( (resolve, reject) => {
		chrome.storage.sync.get(null, function(items) {
			var allKeys = Object.keys(items);
			resolve(allKeys);
		});
	});
};

export let stopAlarm = (alarmName) => {
	chrome.runtime.sendMessage({name: alarmName, trigger: "killAlarm"}, () => {});
};
