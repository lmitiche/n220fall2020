function setup() {
    createCanvas(400,300);

    let mouseX =0
    let mouseY =0;

}

function draw() {
    background(0)
    
    circle(mouseX, mouseY, 30);
    fill(66, 144, 245)

    if (mouseX > 200) {
        fill(245, 66, 66);
    }
     
        
}