import getRenderUrl from "./getRenderUrl.js";
import searchEngineCheck from "./searchEngineCheck.js";

export default function checkUrl() {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        var tab = tabs[0];
        
        try {
            let domain = (new URL(tab.url));
            domain = domain.hostname;

            fetchAndCheck(domain)
            searchEngineCheck(domain, tab.url)
        } catch (err) {

        }

        function fetchAndCheck(domainName){
            fetch('https://raw.githubusercontent.com/thejimi/Filtru/main/blacklist/porn_domains.json') //a list of nsfw websites.
            .then((response) => response.json())
            .then((fetchedList) => {
                var domain = domainName.toString().split('.').reverse().splice(0,2).reverse().join('.')

                if(fetchedList.domains.includes(domain)){
                    chrome.tabs.query({ active: true }, function(tabs) {
                        chrome.tabs.update(tabs[0].id, { url: getRenderUrl('website_blocked', `type=porn&domain=${domainName}`) });
                    });  

                    return;
                } else {
                    
                }
            });
        }
    }); 
}