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
			}else
				reject(null, `${name} was not found`);
		});
  });
};

export const hasInLocal = (name) => localStorage.getItem(name) ? true : false;
