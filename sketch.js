
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boundary1;
var boundary2;
var boundary3;
var gr;
var ball;

function setup() {
	createCanvas(1200,500);
	
	engine = Engine.create();
	world = engine.world;

	boundary1 = new boundary(1050,380,20,100);
	boundary2 = new boundary(850,380,20,100);
	boundary3 = new boundary(950,440,220,20);
	gr = new ground(600,485,1200,20);
	ball = new paper(90,400,30);

	Engine.run(engine);
  
}


function draw() {
  background("black");
  Engine.update(engine);
  
 boundary1.display();
 boundary2.display();
 boundary3.display();
 gr.display();
 ball.display();
 keyPressed();
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:5,y:-15});
	}
}

