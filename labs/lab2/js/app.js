function setup() {
    createCanvas(400,300);

    let mouseX =0
    let mouseY =0;

}

function draw() {
    background(0)
    mouseX = mouseX + 2;
    mouseY = mouseY = 5;
    circle(mouseX, mouseY, 30);
}