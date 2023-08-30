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

chrome.tabs.onUpdated.addListener(async (tabId, info)=>{
    if(isTabMeantForInspection() === false){
        return console.log("Tab not meant for inspection")
    }

    chrome.scripting.
    executeScript({
        target :{tabId: await getCurrentTabId()},
        files: ["./functions/injector.js"]
    })

    console.log(await getCurrentTabInfo())

    console.log("Tab Update - Injecting the script")
})

// chrome.runtime.setUninstallURL("./renders/awman.html")