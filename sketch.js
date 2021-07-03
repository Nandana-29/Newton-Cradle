
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var roof1;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var bobDiameter = 40;
	startBobPositionX=width/2;
	startBobPositionY=height/4+400;
	bob1=new ball(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	//Create the Bodies Here.
	// bob1 = new ball (20,20,10);
	// bob2 = new ball (20,20,10);
	// bob3 = new ball (20,20,10);
	// bob4 = new ball (20,20,10);
	// bob5 = new ball (20,20,10);

	roof1 = new roof(width/2, height/4, width/7, 20);

	rope1=new chain(bob1.body,roof1.body,-bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof1.display(); 
  bob1.display();
}



