var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);
	engine = Engine.create();
	world = engine.world;

	roof = new Roof(500,100,700,50)

	bob1 = new Bob(500,500,70); 
	bob2 = new Bob(570,500,70); 
	bob3 = new Bob(640,500,70);
	bob4 = new Bob(710,500,70);
	bob5 = new Bob(780,500,70);

	rope1 = new Rope(bob1.body,roof.body,0,0);
	rope2 = new Rope(bob2.body,roof.body,70,0);
	rope3 = new Rope(bob3.body,roof.body,140,0);
	rope4 = new Rope(bob4.body,roof.body,210,0);
	rope5 = new Rope(bob5.body,roof.body,280,0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  roof.display()

  

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  rope2.display()
  rope1.display()
  rope3.display()
  rope4.display()
  rope5.display()

   
  
  drawSprites();
 
}
function mouseDragged(){
	
  Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
}



