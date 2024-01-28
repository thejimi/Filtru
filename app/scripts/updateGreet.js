function updateGreet(){
    var greetingTXT = document.getElementById("greetingTXT")
    var greetingTXT2 = document.getElementById("greetingTXT2")
    var greetingIMG = document.getElementById("greetingIMG")
    var date = new Date()
    var hour = date.getHours()
    
    if(hour >= 5 && hour < 12){
        greetingIMG.src = `https://filtru.xyz/cdn/morning.jpg`
        greetingTXT2.innerHTML = `Drink some water, take a shower, have breakfast.`
        return greetingTXT.innerHTML = `Good morning!`
    } else if(hour >= 12 && hour < 19){
        greetingIMG.src = `https://filtru.xyz/cdn/afternoon.jpg`
        greetingTXT2.innerHTML = `We hope your day is good so far.`
        return greetingTXT.innerHTML = `Good afternoon!`
    } else if(hour >= 19 && hour < 23){
        greetingIMG.src = `https://filtru.xyz/cdn/evening.jpg`
        greetingTXT2.innerHTML = `We hope your day was good.`
        return greetingTXT.innerHTML = `Good evening!`
    } else {
        greetingIMG.src = `https://filtru.xyz/cdn/night.jpg`
        greetingTXT2.innerHTML = `Go to sleep! 🫡`
        return greetingTXT.innerHTML = `Goodnight`
    }
}

setInterval(() => {
    updateGreet()
}, 20000);

setTimeout(() => {
    updateGreet()
}, 500);