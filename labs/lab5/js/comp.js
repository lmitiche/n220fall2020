

function setup() {
    createCanvas(400, 300);
    strokeWeight(3);
    
  }
  function draw() {
    background(192, 52, 235);

    //If the key is pressed
    if (keyIsPressed == true) { 
    
    //Draw a sad smiley face
    fill("#ffe14a");                     
    circle(200, 150, 50);
    
    
    fill(0);
    arc(200, 180, 30, 30, -PI, 0, CHORD);
    circle(180,135,5);
    circle(215,135,5);
          
    }
    //Otherwise, draw a happy smiley face
    else {  
        fill("#ffe14a");                     
        circle(200, 150, 50);
        
        
        fill(0);
        arc(200, 165, 30, 30, 0, radians(180), PIE);
        circle(180,135,5);
        circle(215,135,5);
        

        
       
    }
  }

    
   