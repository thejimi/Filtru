export default async function getStorage(key){
    chrome.storage.sync.get([key]).then((result) => {
        return result.key
    });
}