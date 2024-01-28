async function getRandomQuote(){
    const response = await fetch("https://api.quotable.io/quotes/random?limit=1&tags=motivation|famous-quotes|work|success&maxLength=80");
    const res = await response.json();
    console.log(res)
    const quote = `<span onclick='window.open(\`https://google.com/search?q="${res[0].content}" meaning\`)'>${res[0].content}  ~ </span><span onclick='window.open(\`https://google.com/search?q=${res[0].author}\`)'>${res[0].author}</span>`
    document.getElementById("motivationTitle").innerHTML = `${res[0].content}`
    document.getElementById("motivationDetails").innerHTML = `~ ${res[0].author}`
    document.getElementById("motivationDefinition").href = `https://google.com/search?q="${res[0].content}" meaning`
}

setTimeout(() => {
    getRandomQuote()
    document.body.style.zoom = 1.4
}, 500);

