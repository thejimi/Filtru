//Distraction Blocker
//YouTube
// if(window.location.href === `https://www.youtube.com/`){
//     document.getElementById("primary").style.display = `none`
//     document.getElementById("guide-content").style.display = `none`
//     document.getElementById("center").style.display = `none`

//     fetch(chrome.runtime.getURL('/renders/youtube_homepage.html')).then(r => r.text()).then(html => {
//         document.body.insertAdjacentHTML('beforeend', html);
//     });

//     document.addEventListener('keydown', (event)=> {   
//         if(event.key === 'Enter'){
//             var input = document.getElementById("filtru_search").value
//             if(!input){
//                 return
//             }
//             window.location.href = (`https://youtube.com/search?q=${input}`)
//         }
//     });
// }

//Password Checker
var inputs = document.querySelectorAll('input[type=password]');
for (var i = 0; i < inputs.length; i += 1) {
    inputs[i].addEventListener("keydown", passwordFieldKeyUp);
}

function passwordFieldKeyUp() {
    chrome.storage.local.set({popup_action: `password_advice`, enteredPasswordTemp: `${this.value}`});
}

//Communication with app.filtru.xyz
if(window.location.href.includes('filtru.xyz')){
    document.head.innerHTML += `<meta name="filtruapp_isInstalled" content="TRUE">`
    document.head.innerHTML += `<meta name="filtruapp_version" content="1.0.3">`
}

if(window.location.href.includes('localhost')){
    document.head.innerHTML += `<meta name="filtruapp_isInstalled" content="TRUE">`
    document.head.innerHTML += `<meta name="filtruapp_version" content="1.0.4">`
}