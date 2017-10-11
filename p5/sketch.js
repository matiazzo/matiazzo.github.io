function setup() {
  createCanvas(500,500);
  background(0,25,67);
}

function draw() {
  fill(200,200,20,80);
  stroke(255,0,0);
  noStroke();
  ellipse(mouseX,mouseY,20,20);
}

function mouseClicked() {
  background(0,25,67);
}