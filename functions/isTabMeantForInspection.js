export default async function isTabMeantForInspection(){
    try{
        let queryOptions = { active: true, lastFocusedWindow: true };
        let [tab] = await chrome.tabs.query(queryOptions);
        
        if(tab.url.includes('chrome://')){
            return false
        }

        if(tab.url.includes('filtru.xyz')){
            return false
        }

        if(tab.url.includes('chrome-extension://')){
            return false
        }

        return true
    }catch(err){
        console.log(err)
    }
}