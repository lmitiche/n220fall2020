let xPositions = [0,0,0,0,0,0,0,0,0,0];
let yPositions = [0,0,0,0,0,0,0,0,0,0];

function setup() {
    createCanvas(600,300);
    fill(255,12,129);

}

function draw(){
    background(0);
    if(xPositions.length > 10){
        xPositions.shift();
    }
    xPositions.push(mouseX);
    if(yPositions.length > 10){
        yPositions.shift();}
    yPositions.push(mouseY);
    for(var i = 0; i < xPositions.length; i ++){
        circle(xPositions[i], yPositions[i], 20);
    }

}