
var colors=["#6bd3f2","#f0c6f7", "#32a852" ]

function setup() {
    createCanvas(400,300);
    for(let i = 0; i < colors.length; i++){
        fill(colors[i]); 
        rect((55 * i) ,20,50,50);
    }

}
   

