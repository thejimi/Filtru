import checkUrl from './functions/nsfw_sites_lock/checkUrl.js'
import getCurrentTabId from './functions/getCurrentTabId.js';
import getCurrentTabInfo from './functions/getCurrentTabInfo.js';
import isTabMeantForInspection from './functions/isTabMeantForInspection.js';

chrome.tabs.onUpdated.addListener(function
    (tabId, changeInfo, tab) {
      if (changeInfo.url) {
        checkUrl()
      }
    }
);

chrome.runtime.onInstalled.addListener((details)=>{
    if(details.reason == "install"){
        chrome.tabs.create({url : "./renders/thank_you.html"});    
    }
});

chrome.tabs.onUpdated.addListener(async function
    (tabId, changeInfo, tab) {
      if (changeInfo.url) {
        if(isTabMeantForInspection() === false){
            return console.log("Tab not meant for inspection")
        }
    
        chrome.scripting.
        executeScript({
            target :{tabId: await getCurrentTabId()},
            files: ["./functions/injector.js"]
        })
      }
    }
  );

// chrome.runtime.setUninstallURL("./renders/awman.html")