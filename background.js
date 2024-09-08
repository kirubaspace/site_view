chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url) {
    chrome.storage.local.get('visitCounts', function(data) {
      let visitCounts = data.visitCounts || {};
      let url = new URL(tab.url).hostname;
      visitCounts[url] = (visitCounts[url] || 0) + 1;
      chrome.storage.local.set({ visitCounts: visitCounts });
    });
  }
});
