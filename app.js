const screen = document.querySelector(".screen");
const button = document.querySelectorAll(".button");
const clear = document.querySelector(".button-clear");
const equal = document.querySelector(".button-equal");
const dot = document.querySelector(".dot");
var beginning = true;

button.forEach((elm,idx,arr)=>{
    elm.addEventListener("click",(e)=>{
        if(beginning){
            if(elm.textContent == "0" || elm.textContent == "00"){
                screen.innerHTML = "0"
            }
            else{
                screen.innerHTML = elm.textContent;
                beginning = false;
            }
        }        
        else{
            screen.innerHTML += elm.textContent;
        }
    })
})

clear.addEventListener("click",()=>{
    screen.classList.remove("text-red-600")
    screen.innerHTML = 0;
    beginning = true;

})

equal.addEventListener("click",()=>{
    try{
        screen.innerHTML = eval(screen.innerHTML);
    }
    catch(e){
        screen.classList.add("text-red-600");
        screen.innerHTML = "INALID INPUT";
    }
})