export default async function getCurrentTabInfo(){
    try{
        let queryOptions = { active: true, lastFocusedWindow: true };
        let [tab] = await chrome.tabs.query(queryOptions);
        return tab;
    }catch(err){
        console.log(err)
    }
}