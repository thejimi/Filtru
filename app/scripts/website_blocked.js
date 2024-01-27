setTimeout(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const domain = urlParams.get("domain")
    document.getElementById("domainname").innerHTML = domain
    document.getElementById("sub").innerHTML = `Filtru blocked this website for '${urlParams.get("type")}'`
}, 500);