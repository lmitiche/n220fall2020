function setup() {
    createCanvas(1100, 1100);
}

function draw() {
    background(0,100,100);
    var y = 100;

    for (let i = 0; i < 25; ++ i) {
        let x = i*50; 
        
        if (i % 3 == 0 && i % 5 == 0) {
            fill(105, 170, 245);
            square(x, y, 50);
        }
        else if (i % 5 === 0) {
            fill(101, 207, 74);
            square(x, y, 50);
        }
        else if (i % 3 === 0) {
            fill(224, 99, 255);
            ellipse(x+25, y+25, 50, 50);
        }
        else {
            fill(0);
            ellipse(x+25, y+25, 50, 50);
        }
    }
}
