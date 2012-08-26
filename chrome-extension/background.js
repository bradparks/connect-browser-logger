/**
 * The background page is for forwarding message from devtools to content script.
 */

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
  var tabId = message.tabId;
  delete message.tabId;
  chrome.tabs.sendMessage(tabId, message);
});
