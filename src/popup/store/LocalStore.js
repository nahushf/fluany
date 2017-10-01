export const saveInLocal = (key, value) => {
  chrome.storage.local.set({[key]: value}, () => {
    console.log(`${key} saved`)
  })
}

export const getInLocal = (name) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(name, obj => {
      if (obj[name]) {
        resolve(obj[name])
      }
      reject(null, `${name} was not found`)
    })
  })
}

export const cleanLocalStorage = () => {
  chrome.storage.local.clear(function () {
    var error = chrome.runtime.lastError
    if (error) {
      console.error(error)
    }
  })
}
