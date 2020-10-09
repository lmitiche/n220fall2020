var myCircle = {
    r: 15,
    x: 10,
    y: 150,
    color: [ 66, 135, 245 ],
    update: function () {

        fill(this.color);
        this.x  += 1;
        circle(this.x, this.y, this.r);

       
            

    }
}

function setup() {
    createCanvas(400,300);
    background(0);
}

function draw() {
    myCircle.update();
   
}



