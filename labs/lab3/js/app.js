function setup() {
    createCanvas(400,300);

}


function draw() {
    background(100);


    noFill();

    //For loop syntax
    for( var i =0; i < 30; i++) {
        stroke(255 - (i * 15));

        circle(200,150, i * 5);
    }
    console.log("Afterwards: " + i);
}