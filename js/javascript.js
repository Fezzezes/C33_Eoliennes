
let blades = [];
let windspeed = 1;
let buttonLess = document.querySelector("#btn-less");
let buttonMore = document.querySelector("#btn-more");

window.addEventListener("load",()=>{

    for(let i = 1; i < 4; i++)
    {
        blades.push(new Blade("blades-"+i))
    }
    tick();
})

buttonMore.addEventListener("click", () => {

    windspeed++;
    console.log("More Power!!! | "+ windspeed);
})

buttonLess.addEventListener("click", () => {
    
    if(windspeed > 0)
        windspeed--;
        
    console.log("Less Power... | "+ windspeed);
})

const tick = () => {

    for(let i = 0; i<blades.length;i++){
        blades[i].tick();
    }

    window.requestAnimationFrame(tick);
}