var movingRect,fixedRect, rect1, rect2, rect3

function setup() {
  createCanvas(1200,400);

  movingRect=createSprite(400,200,80,30)
  movingRect.shapeColor="green"
  fixedRect=createSprite(600,200,50,80)
  fixedRect.shapeColor="green"
rect1=createSprite(200, 200, 50, 80)
rect1.shapeColor="blue"
rect2=createSprite(700, 100, 50, 50)
rect2.velocityY=3
  rect3=createSprite(700, 300, 50, 50)
  rect3.velocityY=-3
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX
  movingRect.y=mouseY
  if(Touching(movingRect,fixedRect)){
    movingRect.shapeColor="yellow"
    fixedRect.shapeColor="yellow"
  }
  else{
    movingRect.shapeColor="green"
    fixedRect.shapeColor="green"
  }
  if(Touching(movingRect,rect1)){
    text ("you win",100,150);
  }
bouncing(rect2, rect3);

  drawSprites();
}
