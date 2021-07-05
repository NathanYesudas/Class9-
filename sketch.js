var ball 
function setup() {
  createCanvas(400,400);
ball =createSprite(200,200,20,20)


}

function draw() 
{
 if(keyDown(RIGHT_ARROW)) {
   ball.x += 10
 }
 if(keyDown(LEFT_ARROW)) {
  ball.x -= 10
}
 
if(keyDown(UP_ARROW)) {
  ball.y -= 10
}
if(keyDown(DOWN_ARROW)) {
  ball.y += 10
}

background(30);
drawSprites()
}




