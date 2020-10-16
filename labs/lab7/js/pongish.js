//ball
let circlex = 200;
let circley = 150;
let diameter = 20;
let velX = -3;
let velY = 3;




   



function setup() {
    createCanvas(400,300);


}

function draw() {
    background(0);

    //ball bounce
    circle(circlex , circley , 10);
    circlex = circlex+velX;
    circley = circley+velY;
    if(circlex >= 400 ){
        circlex = 200
        circley = 150;
       
    } else if(circley>= 300){
        velY=velY*-1
    }
    else if( circlex<= 0){
        velX = velX*-1
    }
    else if(circley<= 0 ){
        velY= velY*-1
        }
    //paddle 
  rect( 380, mouseY, 10, 80);
    let rectx = 380;
    let recty = mouseY;
    let rectw = 10;
    let recth = 80;
    
  //hitTest 
    if(circlex > mouseX && circlex < mouseX + 80 && circley > mouseY && circley < mouseY + 10){
        velY *= -1
    }
if ((circlex > rectx &&
    circlex < rectx + rectw)&&
   (circley +diameter/2) >= recty) {
  velX *=-1;
  velY *=-1;
  
}
//score
var score = 0;
score ++;
fill('white');
textSize(24);
text("Score: " + score, 10, 25);

}
