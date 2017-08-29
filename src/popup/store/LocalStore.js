export const saveInLocal = (key, value) => {
    chrome.storage.sync.set({[key]: value}, () => {
      console.log(`${key} saved`);
    });
};

export const getInLocal = (name) => {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(name, obj => {
			if(obj[name]){
        resolve(obj[name]);
			}
				reject(null, `${name} was not found`);
		});
  });
};

export const cleanLocalStorage = () => {
	chrome.storage.local.clear(function() {
    var error = chrome.runtime.lastError;
    if (error) {
      console.error(error);
    }
	});
};
