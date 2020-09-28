
let colors = ["#a4edaa", "#81e3e1", "#1330a8", "#d55ce6"]


function setup() {
    createCanvas(400,300);

}

function draw() {
    background(0);
    circle(200, 150, 50);
}

 
    function mousePressed() {
        let d =dist(mouseX, mouseY, 200, 150);
        if(d < 100){
            fill(colors[Math.floor(Math.random() * colors.length)]);
    
        
}
        
}


