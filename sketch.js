const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var engine, world;
var bg
var girl;

function preload(){
  bg = loadImage("snow1.jpg")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);
snow1 = new Snow(150,20,30,30);
snow2 = new Snow(300,20,30,30);
snow3 = new Snow(450,20,30,30);
snow4 = new Snow(500,20,30,30);

girl = new Girl(500,20,30,30);
}

function draw() {
  background(bg); 
  Engine.update(engine)
  snow1.display(); 
  snow2.display(); 
  snow3.display(); 
  snow4.display(); 
  girl.display();

  drawSprites();
}