export default async function checkUrl() {
    const result = await chrome.storage.local.get(["module_nsfwblocker"])
    if(result.module_nsfwblocker === `disabled`){
        return;
    }

    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        var tab = tabs[0];
        
        try {
            let domain = (new URL(tab.url));
            domain = domain.hostname;

            fetchAndCheck(domain)
        } catch (err) {

        }

        function fetchAndCheck(domainName){
            fetch('https://raw.githubusercontent.com/thejimi/filtru-default-website-blacklist/main/nsfw-domains.json') //a list of nsfw websites.
            .then((response) => response.json())
            .then((fetchedList) => {
                var domain = domainName.toString().split('.').reverse().splice(0,2).reverse().join('.')

                if(fetchedList.domains.includes(domain)){
                    chrome.tabs.query({ active: true }, function(tabs) {
                        chrome.tabs.update(tabs[0].id, { url: `https://app.filtru.xyz/render/nsfw_blocked.html?domain=${domain}` });
                    });  

                    return;
                } else {
                    
                }
            });
        }
    }); 
}