function openTab() {
  chrome.tabs.create({
    url: 'https://www.fitnesstep1.com/',
  })
}

chrome.browserAction.onClicked.addListener(openTab);
