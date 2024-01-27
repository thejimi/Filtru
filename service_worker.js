import checkUrl from "./src/checkUrl.js";
import getRenderUrl from "./src/getRenderUrl.js";
import uninstallUrl from "./src/uninstallUrl.js";
import * as extensionInfo from './extensionInfo.js'

uninstallUrl() //set the uninstall url

chrome.runtime.onInstalled.addListener(async (details)=>{
  if(details.reason == "install"){
      chrome.tabs.create({url : getRenderUrl('installed')});    
  }
});

chrome.tabs.onUpdated.addListener(function
  (tabId, changeInfo, tab) {
    if (changeInfo.url) {
      checkUrl()
    }
  }
);