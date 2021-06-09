
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var stone,iron,rubber,hammer,plane;



function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	plane = new Plane(600,height,1200,20);

	stone = new Stone(700,320,100,100);
	iron = new Iron(300,350);
	rubber = new Rubber(900,450,70);
	hammer = new Hammer(10,100);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");

  Engine.update(engine);

  plane.display();
  stone.display();
  iron.display();
  rubber.display();
  hammer.display();

  
  drawSprites();
 
}



