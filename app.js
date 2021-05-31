const screen = document.querySelector(".screen");
const button = document.querySelectorAll(".button");
const clear = document.querySelector(".button-clear");
const equal = document.querySelector(".button-equal");
var beginning = true;

button.forEach((elm,idx,arr)=>{
    elm.addEventListener("click",(e)=>{
        if(beginning){
            screen.innerHTML = elm.textContent;
            beginning = false;
        }        
        else{
            screen.innerHTML += elm.textContent;
        }
    })
})

clear.addEventListener("click",()=>{
    screen.innerHTML = 0;
    beginning = true;
})

equal.addEventListener("click",()=>{
    screen.innerHTML = eval(screen.innerHTML);
})