let x = 200;
let y = 150;
let velX = 3;
let velY = 3;



function setup() {
    createCanvas(400,300);

}
function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

    var colliding = false;

    if(circleX > rectX || circleX < rectX + rectW) {

        if(circleY > rectY || circleY < rectY + rectH) {
              return true;

        }

   }

   return false;

}

function draw() {
    background(0);
    circle(x , y , 10);
    x = x+velX;
    y = y+velY;
    if(x>= 400){
        velX= velX*-1
    } else if(y>= 300){
        velY=velY*-1
    }
    else if( x<= 0){
        velX = velX*-1
    }
    else if(y<= 0 ){
        velY= velY*-1
        }
    rect(mouseX, 280, 80, 10);
    if(x > mouseX && x < mouseX + 80 && y > mouseY && y < mouseY + 10){
        velY *= -1
    }


}
