
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 bob1 = new Bob(400,400,80);
	 bob2 = new Bob(480,400,80);
	 bob3 = new Bob(560,400,80);
	 bob4 = new Bob(640,400,80);
	 bob5 = new Bob(720,400,80);
	 roof = new Roof(575,100);
	 rope1 = new Rope(bob1.body,roof.body,-160,0);
	 rope2 = new Rope(bob2.body,roof.body,-80,0);
	 rope3 = new Rope(bob3.body,roof.body,0,0);
	 rope4 = new Rope(bob4.body,roof.body,80,0);
	 rope5 = new Rope(bob5.body,roof.body,160,0);

	 


	Engine.run(engine);
  
}


function draw() {
	background(255);
  rectMode(CENTER);
  background(100);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-140,y:140})
	}
}