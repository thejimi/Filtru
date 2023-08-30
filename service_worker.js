import checkUrl from './functions/nsfw_sites_lock/checkUrl.js'

chrome.runtime.onInstalled.addListener((details)=>{
    if(details.reason == "install"){
        chrome.tabs.create({url : "./renders/thank_you.html"});    
    }
});

export async function getCurrentTabId(){
    try{
        let queryOptions = { active: true, lastFocusedWindow: true };
        let [tab] = await chrome.tabs.query(queryOptions);
        return tab.id;
    }catch(err){
        console.log(err)
    }
}

// chrome.tabs.onUpdated.addListener(async (tabId, info)=>{
//     chrome.scripting.
//     executeScript({
//         target :{tabId: await getCurrentTabId()},
//         files: ["./dist/injectorscript.js"]
//     })
    
//     console.log("detected tab update")
// })

chrome.tabs.onUpdated.addListener(function
    (tabId, changeInfo, tab) {
      if (changeInfo.url) {
        checkUrl()
      }
    }
);

// chrome.runtime.setUninstallURL("./renders/awman.html")