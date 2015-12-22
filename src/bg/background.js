chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    chrome.tabs.executeScript(null, { file: "src/inject/jiramosity.js" });
    sendResponse();
});
