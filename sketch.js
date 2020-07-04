const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;



var packageBody,ground1,ground,dustbin1,dustbin2,dustbin3,dustbin4,paper;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground1);


	 ground = new Ground(600,height,1200,20);
	 dustbin1 = new Dustbin(600,height-40,200,20);
	 dustbin2 = new Dustbin(500,height-100,20,180);
	 dustbin3 = new Dustbin(700,height-100,20,180);
	 dustbin4 = new DustbinImage(600,height-100,140,140);
	 paper = new Paper(200,450,40);
 
	Engine.run(engine);
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  Engine.run(engine);
	  Render.run(render);
	
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  dustbin4.display();
  //keyPressed();
  drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW ) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
		
	}
	
}
