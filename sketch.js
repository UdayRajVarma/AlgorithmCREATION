var movingRect,fixedRect;
var stoppedRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(600,200,50,50);
  movingRect.debug = true;
  movingRect.shapeColor = "green";
  movingRect.velocityY = 2;

  fixedRect = createSprite(600,400,50,50);
 fixedRect.debug = true;
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = -2;

  stoppedRect = createSprite(600,300,50,50);
  stoppedRect.debug = true;
  stoppedRect.shapeColor = "red";
  stoppedRect.velocityY = -2;
}

function draw() {
  background(0,0,0);
  
bounceOff(movingRect,stoppedRect);

  drawSprites();
  }

  