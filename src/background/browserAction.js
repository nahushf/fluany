// When we defined browser_action
if (chrome.browserAction) {
  chrome.browserAction.setIcon({
    path: require('icons/icon-16.png')
  })

	// When we defined page_action
} else if (chrome.pageAction) {
  const showPageAction = (tabId) => {
    chrome.pageAction.show(tabId)

    chrome.pageAction.setIcon({
      path: require('icons/icon-48.png'),
      tabId: tabId
    })
  }

  // Show page action on each page update
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    showPageAction(tabId)
  })
}
