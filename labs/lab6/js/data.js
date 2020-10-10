var myCircle = {
    r: 50,
    x: 160,
    y: 150,
    color: [ 76, 138, 135],
    update: function () {

        fill(this.color);
        circle(this.x, this.y, this.r);

       
            

    }
}

function setup() {
    createCanvas(400,300);
    background(225, 245, 244);
}

function draw() {
    myCircle.update();
   
}



