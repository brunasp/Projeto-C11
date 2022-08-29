var sea,ship;
var seaImg, shipImg1;


function preload(){
seaImg = loadAnimation("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");

}

function setup(){
  createCanvas(400,400);
background ("blue");

  sea=createSprites(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

ship=createSprites(130,200,30,30);
ship.addAnimation("moving ship", shipImg1);
ship.scale=0.25;
}

function draw() {
  background("blue");
  sea.velocityX= -3;  
  drawSprites();
 if (keyDown("up")){
ship.y=ship.y-10;}
if (keyDown("down")){
ship.y=ship.y+10;}
if (keyDown("left")){
  ship.x=ship.x-10;}
  if (keyDown("right")){
    ship.x=ship.x+10;}
}
