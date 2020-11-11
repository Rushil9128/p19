var ballimg,img,paddle,ball,s1,s2;
var gamestate,play,end;
var score = 0;
function preload() {
  /* preload your images here of the ball and the paddle */  

    ballimg = loadImage("ball.png");
    img = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(200,200,10,10);
  ball.addImage(ballimg);
  ball.scale=0.5;
  paddle = createSprite(16,200,10,10);
  paddle.addImage(img);
  ball.velocityX=9;
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  var gamestate = play;
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[1],scoreup);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[0],gameOver);
  ball.bounceOff(paddle,randomVelocity);
  console.log
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  paddle.bounce(edges);
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.y=paddle.y-6;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.y=paddle.y+6;
  }
  drawSprites();
  fill("black");
  text("score: "+score,180,18);
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  ball.velocityY = Math.round(random(-6,6));

}
function gameOver(){
  ball.x=200;
  ball.y=200;
  ball.velocityX=9;
  ball.velocityY=0;
  score -=1;
}
function scoreup(){
  score+=1;
}
