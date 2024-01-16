class Blade {

    constructor(id){

        console.log("Construction: #"+id);
        this.node = document.querySelector("#"+id)
        this.angle = Math.random()*40;
        console.log(this.node);
        console.log(this.angle);
    }

    tick(){

        console.log("tick");
        this.angle += windspeed;
        this.node.style.transform = "rotate("+this.angle+"deg)";
      
    }
}