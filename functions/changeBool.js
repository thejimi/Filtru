export default async function changeBool(key, value){
    chrome.storage.sync.set({ key: value }).then(() => {
        return true
    });
}