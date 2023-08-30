//Distraction Blocker
//YouTube
if(window.location.href === `https://www.youtube.com/`){
    document.getElementById("primary").style.display = `none`
    document.getElementById("guide-content").style.display = `none`
    document.getElementById("center").style.display = `none`

    fetch(chrome.runtime.getURL('/renders/youtube_homepage.html')).then(r => r.text()).then(html => {
        document.body.insertAdjacentHTML('beforeend', html);
    });

    document.addEventListener('keydown', (event)=> {   
        if(event.key === 'Enter'){
            var input = document.getElementById("filtru_search").value
            if(!input){
                return
            }
            window.location.href = (`https://youtube.com/search?q=${input}`)
        }
    });
}