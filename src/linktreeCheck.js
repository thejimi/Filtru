import getRenderUrl from "./getRenderUrl.js";
export default function linktreeCheck(domain, url) {
    console.log(domain)
    console.log(url)
    var trees = []

    if(url.includes("Filtru_Allowed_Linktree=true")){
        return;
    }

    if(domain.includes('linktr.ee')){
        chrome.tabs.query({ active: true }, function(tabs) {
            chrome.tabs.update(tabs[0].id, { url: getRenderUrl('linktree_blocked', `url=${url}`) });
        });
    }
}