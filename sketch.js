const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg ;
var snowfall = [];
var boy;
var ground;

function preload(){
  bgImg = loadImage("snow1.jpg");
  kidImg = loadImage("kid3.png");
 // snowImg = loadImage("snow5.webp");
}



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 
  boy = createSprite(400,280,50,50);
  boy.addImage(kidImg);
  boy.scale= 0.3;

  ground = createSprite(400,380,800,10);
  ground.visible = false;

  if(frameCount % 150===0){
    for (var k = 0; k<100; k++){
      snowfall.push(new Snow(random(40,760),random(0,400),5));
    }
  }

}
 function draw (){
  background(bgImg);

  Engine.update(engine);

  boy.collide(ground);
if(keyCode===UP_ARROW){
  boy.velocityY = -1;
}
if(keyCode===DOWN_ARROW){
  boy.velocityY = 1;
}
if(keyCode===LEFT_ARROW){
  boy.velocityX = -1;
}
if(keyCode===RIGHT_ARROW){
  boy.velocityX = 1;
}


  for(var x = 0 ; x<snowfall.length ; x++){
    snowfall[x].display();
    snowfall[x].update();
  }

  drawSprites();
 }

 
