
//create ball
    var ball = { x: 100, y: 100,
    velocityX: 2, velocityY: 2,
    update: function() {
        noFill();
        stroke(255, 238, 130);
        circle(this.x, this.y, 10);
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
    };
    
    //create paddle
    var paddle = {
    x: 100, y: 350, w: 150, h: 20,
    update: function() {
        noFill();
        stroke(143, 251, 255);
        rect(this.x, this.y, this.w, this.h);

    //keys move paddle left and right
        if(keyIsDown(LEFT_ARROW)) {
        this.x -= 2;
    }
        if(keyIsDown(RIGHT_ARROW)) {
        this.x += 2;
    }
    }
    };
    
    
    //create blocks
    var blocks = [];
        for(var i = 0; i < 6; i++) {
        blocks[i] = { x: i * 60, y: 10 };
    }
    
    
    function setup() {
        createCanvas(400, 400);
    }
    
    function draw() {
        background(70);
        ball.update();
        paddle.update();
    
    //ball bounces
        if(ball.x > 400) {
        ball.x = 400;
        ball.velocityX *= -1;
    }
        if(ball.x < 0) {
        ball.x = 0;
        ball.velocityX *= -1;
    }
        if(ball.y < 0) {
        ball.y = 0;
        ball.velocityY *= -1;
    }
    
    //ball bounces off paddle
        if(hitTestPoint(ball.x, ball.y, paddle.x, paddle.y, paddle.w, paddle.h) ) {
        ball.velocityY *= -1;
    }
        for(var i = 0; i < blocks.length; i++) {
        var b = blocks[i];
        rect(b.x, b.y, 60, 20);
    
        if(hitTestPoint(ball.x, ball.y, b.x, b.y, 60, 20)) {
        ball.velocityY *= -1;

    //remove block from array when ball hits it
        blocks.splice(i, 1);
    }
    }
    }
    function hitTestPoint(px, py, bx, by, bw, bh) {
    
        if(px > bx && px < bx + bw) {
        if(py > by && py < by + bh) {
        return true;
    }
    }
        return false;
    }