export default async function getCurrentTabId(){
    try{
        let queryOptions = { active: true, lastFocusedWindow: true };
        let [tab] = await chrome.tabs.query(queryOptions);
        return tab.id;
    }catch(err){
        console.log(err)
    }
}