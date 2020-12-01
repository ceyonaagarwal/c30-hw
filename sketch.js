const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;

var ground;
var engine,world;
var stand1,stand2;
var block1;

function preload(){
  polygon_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,380,1000,10);
  stand1 = new Ground(370,300,250,10);
  stand2 = new Ground(620,180,200,10);
  //stack1 : 1/left to right
  block1 = new Block(280,275,30,40);
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  //2
  block8 = new Block(310,235,30,40);
  block9 = new Block(340,235,30,40);
  block10 = new Block(370,235,30,40);
  block11 = new Block(400,235,30,40);
  block12 = new Block(430,235,30,40);
  //3
  block13 = new Block(340,195,30,40);
  block14 = new Block(370,195,30,40);
  block15 = new Block(400,195,30,40);
  //4
  block16 = new Block(370,155,30,40);
  //stack2: 1/left to right
  block17 = new Block(560,155,30,40);
  block18 = new Block(590,155,30,40);
  block19 = new Block(620,155,30,40);
  block20 = new Block(650,155,30,40);
  block21 = new Block(680,155,30,40);
  //2
  block22 = new Block(590,115,30,40);
  block23 = new Block(620,115,30,40);
  block24 = new Block(650,115,30,40);
  //3
  block25 = new Block(620,75,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  background("brown");  
  ground.display();
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  slingshot.display();
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


function keyPressed(){
  if(keyCode===32){
    slingshot.attach(this.polygon);
  }
}