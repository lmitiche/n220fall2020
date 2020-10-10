var rectY = [10, 10, 10];
function setup() {
  createCanvas(400, 300);
}
function draw() {
  background(0);
  noStroke();
  fill(66, 236, 245);
  for (var i = 0; i < rectY.length; i++) {
    rect((i+1)*70, rectY[i], 50, 25);
    rectY[i] += 1;
  }
}
