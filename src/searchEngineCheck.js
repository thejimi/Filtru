import getRenderUrl from "./getRenderUrl.js";
import nsfw_keywords from "../blacklist/nsfw_keywords.js";
export default function searchEngineCheck(domain, url) {
    console.log(domain)
    console.log(url)
    var searchEngines = ['www.google', 'bing.com', 'duckduckgo.com', 'you.com'] //only these are supported
    var triggerKeywords = nsfw_keywords()

    if(url.includes("Filtru_Allowed_Search=true")){
        return;
    }

    searchEngines.forEach(element => {
        if(domain.includes(element)){
            console.log('seach engine')
            triggerKeywords.forEach(keyword => {
                if(url.toLowerCase().includes(keyword)){
                    chrome.tabs.query({ active: true }, function(tabs) {
                        chrome.tabs.update(tabs[0].id, { url: getRenderUrl('search_engine_blocked', `type=nsfw&domain=${domain}&url=${url}&keyword=${keyword}`) });
                    });  
                } else {
                    return;
                }
            });
        } else {
            return;
        }
    });
}