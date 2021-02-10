
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	roof = new Roof(100,200,100,200)
	bobObject1 = new Bob(100, 100, 20)
	rope = new Rope(bird.body, log6.body)

	//Create the Bodies Here.
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  bobObject1.display();
}



