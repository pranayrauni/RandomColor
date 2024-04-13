const button = document.getElementById("btn");
const body = document.getElementById("body");

button.addEventListener("click", () => {
    const alpha = "abcdef0123456789";

    let color = "#"

    for (let index = 0; index < 6; index++) {
       color += alpha.charAt(Math.floor((Math.random()*16)));   
        
    }
    
    body.style.backgroundColor = `${color}`
})