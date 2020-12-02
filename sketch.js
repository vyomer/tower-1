const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2, stand3;
var ball;
var slingShot;
var polygon_img;
var backImage;

function preload(){
  polygon_img=loadImage("polygon.png");
  backImage = loadImage("back.jpg");

}

function setup() {
  createCanvas(1535,790);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();

  stand1 = new Stand(390,600,250,10);
  stand2 = new Stand(700,300,200,10);
  stand3 = new Stand(1300,450,280,10);
 
  //stand1
  //level one
  block1 = new Block(300,575,30,40);
  block2 = new Block(330,575,30,40);
  block3 = new Block(360,575,30,40);
  block4 = new Block(390,575,30,40);
  block5 = new Block(420,575,30,40);
  block6 = new Block(450,575,30,40);
  block7 = new Block(480,575,30,40);

  //level two
  block8 = new Block(330,535,30,40);
  block9 = new Block(360,535,30,40);
  block10 = new Block(390,535,30,40);
  block11 = new Block(420,535,30,40);
  block12 = new Block(450,535,30,40);

  //level three
  block13 = new Block(360,495,30,40);
  block14 = new Block(390,495,30,40);
  block15 = new Block(420,495,30,40);

  //top
  block16 = new Block(390,455,30,40);

  //stand2
  //level one
  blocks1 = new Block(640,275,30,40);
  blocks2 = new Block(670,275,30,40);
  blocks3 = new Block(700,275,30,40);
  blocks4 = new Block(730,275,30,40);
  blocks5 = new Block(760,275,30,40);

  //level two
  blocks6 = new Block(670,235,30,40);
  blocks7 = new Block(700,235,30,40);
  blocks8 = new Block(730,235,30,40);

  //top
  blocks9 = new Block(700,195,30,40);

  //stand3
  //level one
  box1 = new Block(1200,425,30,40);
  box2 = new Block(1230,425,30,40);
  box3 = new Block(1260,425,30,40);
  box4 = new Block(1290,425,30,40);
  box5 = new Block(1320,425,30,40);
  box6 = new Block(1350,425,30,40);
  box7 = new Block(1380,425,30,40);
  box8 = new Block(1410,425,30,40);
  
  //level two
  box9 = new Block(1230,385,30,40);
  box10 = new Block(1260,385,30,40);
  box11 = new Block(1290,385,30,40);
  box12 = new Block(1320,385,30,40);
  box13 = new Block(1350,385,30,40);
  box14 = new Block(1380,385,30,40);

  //level three
  box15 = new Block(1260,345,30,40);
  box16 = new Block(1290,345,30,40);
  box17 = new Block(1320,345,30,40);
  box18 = new Block(1350,345,30,40);

 
  ball = Bodies.circle(150,395,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:150,y:395});

}


function draw() {
  background(backImage); 

  textSize(40);
  strokeWeight(10);
  stroke("red");
  fill("blue");
  text("TOWER SIEGE", 600, 50);
  noStroke();

  textSize(25);
  fill("yellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks!!!",350,100);
  //text("Press space to get a second chance!!!",500,150);

  ground.display();
  stand1.display();
  stand2.display();
  stand3.display();
  
  strokeWeight(2);
  stroke(15);
  fill(135,206,234);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill(255,192,203);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill(63,224,208);
  block13.display();
  block14.display();
  block15.display();

  fill("yellow");
  block16.display();
  blocks9.display();

  fill(135,206,234);
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();

  fill(63,224,208);
  blocks6.display();
  blocks7.display();
  blocks8.display();

  //stand3
  fill(135,206,234);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();

  fill(255,192,203);
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  fill(63,224,208);
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  
  fill("gold");
  slingShot.display();

  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});

}

function mouseReleased(){
  slingShot.fly();

}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(ball.body,{x:150, y:395});
    slingShot.attach(ball.body);
  }
}