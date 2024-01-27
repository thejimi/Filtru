setTimeout(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const domain = urlParams.get("domain")
    document.getElementById("domainname").innerHTML = `searching for ${urlParams.get("type")}?`
    document.getElementById("sub").innerHTML = `Filtru detected the keyword '${urlParams.get("keyword")}' in your ${domain} search <strong><span style="cursor:pointer" onclick="alert(\`${urlParams.get('url')}\`)">query</span></strong>`
    document.getElementById("gobackbtn").innerHTML = `<i class="fa-solid fa-backward"></i>&nbsp;&nbsp;Go back to ${domain}`
    document.getElementById("ignorebtn").addEventListener("click", ignore);
    document.getElementById("gobackbtn").addEventListener("click", goback);
}, 500);

function ignore(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const url = urlParams.get("url")
  window.location.href = (`${url}&FILTRUIGNORESEARCHENGINEBLOCKED=true`)
}

function goback(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const url = urlParams.get("domain")
  window.location.href = `https://`+url
}