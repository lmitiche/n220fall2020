// var Drops = { 
//     x:200, 
//     y: 0, 
//     velocityY: 5,
//     createCircle: function(){
//         circle(this.x, this.y, 30);
//     }
// }

// function setup(){
// createCanvas(400,300);

// }

// function draw(){
//     background(0);
//     let droplets = Drops;
//     droplets.createCircle();
//     droplets.y += droplets.velocityY;
   
// }

let y = [0,0,0,0,0,0,0,0,0,0];
let x = 200;
let velY = 5;
function setup(){
    createCanvas(400, 300)
}

function draw(){
    background(0)
    for(let i = 0; i < y.length; i++){
        if(i % 10 == 0){
          y[i] += 5;  
        }
        
        circle(x, y[i], 20)
    }

}