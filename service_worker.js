import checkUrl from './functions/nsfw_sites_lock/checkUrl.js'
import getCurrentTabId from './functions/getCurrentTabId.js';
import getCurrentTabInfo from './functions/getCurrentTabInfo.js';
import isTabMeantForInspection from './functions/isTabMeantForInspection.js';
import changeBool from './functions/changeBool.js';
import getStorage from './functions/getStorage.js';

chrome.tabs.onUpdated.addListener(function
    (tabId, changeInfo, tab) {
      if (changeInfo.url) {
        checkUrl()
      }
    }
);

chrome.runtime.onInstalled.addListener(async (details)=>{
    if(details.reason == "install"){
        chrome.tabs.create({url : "http://localhost:3000/extension?justInstalled=true"});    

        await chrome.storage.local.set({module_nsfwblocker: `enabled`});
        await chrome.storage.local.set({module_passwordadvisor: `enabled`});
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

  chrome.runtime.onMessageExternal.addListener(
    async function(request, sender, sendResponse) {
      if(request.changeStatusOfNSFWBlocker){
        // chrome.storage.local.set({ test:`yes` }).then(() => {
        //   sendResponse("ok")
        // });
        try {
          const result = await chrome.storage.local.get(["module_nsfwblocker"]);
          if(result.module_nsfwblocker === 'enabled'){
            await chrome.storage.local.set({module_nsfwblocker: `disabled`});
          } else {
            await chrome.storage.local.set({module_nsfwblocker: `enabled`});
          }
          sendResponse(result.module_nsfwblocker)
          console.log(await chrome.storage.local.get(["module_nsfwblocker"]))
        } catch(error) {
          console.log(error);
        };
      }

      if(request.changeStatusOfPasswordAdvisor){
        // chrome.storage.local.set({ test:`yes` }).then(() => {
        //   sendResponse("ok")
        // });
        try {
          const result = await chrome.storage.local.get(["module_passwordadvisor"]);
          if(result.module_passwordadvisor === 'enabled'){
            await chrome.storage.local.set({module_passwordadvisor: `disabled`});
          } else {
            await chrome.storage.local.set({module_passwordadvisor: `enabled`});
          }
          sendResponse(result.module_passwordadvisor)
          console.log(await chrome.storage.local.get(["module_passwordadvisor"]))
        } catch(error) {
          sendResponse(error)
          console.log(error);
        };
      }

      if(request.isNsfwBlockerEnabled){
        try {
          const result = await chrome.storage.local.get(["module_nsfwblocker"]);
          sendResponse(result.module_nsfwblocker)
          console.log(await chrome.storage.local.get(["module_nsfwblocker"]))
        } catch(error) {
          console.log(error);
        };
      }

      if(request.isPasswordAdvisorEnabled){
        try {
          const result = await chrome.storage.local.get(["module_passwordadvisor"]);
          sendResponse(result.module_passwordadvisor)
          console.log(await chrome.storage.local.get(["module_passwordadvisor"]))
        } catch(error) {
          console.log(error);
        };
      }

      if(request.getTempData_Password){
        try {
          const result = await chrome.storage.local.get(["enteredPasswordTemp"]);
          chrome.storage.local.set({popup_action: `home`})
          sendResponse(result.enteredPasswordTemp)
        } catch(error) {
          console.log(error);
        };
      }

      if(request.popupMode){
        try {
          const result = await chrome.storage.local.get(["popup_action"]);
          sendResponse(result.popup_action)
          console.log(result.popup_action)
        } catch(error) {
          console.log(error);
        };
      }

      if(request.ping){
        try {
          sendResponse(`pong`)
        } catch(error) {
          console.log(error);
        };
      }
    });

// chrome.runtime.setUninstallURL("./renders/awman.html")