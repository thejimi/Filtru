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
        } catch (err) {

        }

        function fetchAndCheck(domainName){
            fetch('https://raw.githubusercontent.com/thejimi/filtru-default-website-blacklist/main/nsfw-domains.json') //a list of nsfw websites.
            .then((response) => response.json())
            .then((fetchedList) => {
                var domain = domainName.toString().split('.').reverse().splice(0,2).reverse().join('.')

                if(fetchedList.domains.includes(domain)){
                    chrome.tabs.query({ active: true }, function(tabs) {
                        chrome.tabs.update(tabs[0].id, { url: `renders/filtru_nsfw/blocked.html?domain=${domain}` });
                        chrome.scripting.executeScript(tabs[0].id, {
                            func: () => {
                              console.log("hey there buddy")
                            }
                          })
                    });  

                    return;
                } else {
                    
                }
            });
        }
    }); 
}