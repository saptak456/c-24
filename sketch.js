
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,dustbin,ground;
var gameState = "start";
var bg1load, bg1 , bg2load,bg2, bg3load , bg3;
var player;
var player1;

var g = 0;
var wood1,wood2,wood3;
var woodimg;
var woodimg2;
var floorimg ; 
var floor1;
var playbutton;
var playbutton1;
var music1


function preload()
{

	player = loadImage("basketball.png");
	woodimg = loadImage("clipart-ruler-brown.png")
	woodimg2 = loadImage("96287500-uncolored-rough-wall-made-of-pine-wood-boards-flat-background-photo-texture.jpg")
    floorImg = loadImage("41bf6b17b1c8c90c10c8229fcf9ca8f7.jpg");
	playbutton = loadImage("unnamed.png");

}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();

	world = engine.world;

	ball=new Ball(75,300);

	ground=new Ground(600,380,1200,20);



	 floor1 = createSprite(630,50,200,20);
	 floor1.addImage(floorImg); 
     floor1.scale = 0.9;


	side1=new hoop(900,310,20,100);

	side2=new hoop(1100,310,20,100);

side3=new hoop(1000,350,150,80);


player1 = createSprite(200,200,20,20);
player1.addImage(player);
player1.scale = 0.11;


wood1 = createSprite(200,200,20,100);
wood1.addImage(woodimg);
wood1.scale = 0.050

wood2 = createSprite(200,200,20,100);
wood2.addImage(woodimg);
wood2.scale = 0.050

wood3 = createSprite(200,200,200,20);
wood3.addImage(woodimg2);
wood3.scale= 0.090;


playbutton1 = createSprite(600,200,10,10);
playbutton1.addImage(playbutton);
playbutton1.scale = 0.2;
playbutton1.visible = false;

	//Create the Bodies Here.


	Engine.run(engine);
	

  
}


function draw() {
  rectMode(CENTER);
  background(0);

if(gameState ==="start"){


	playbutton1.visible = true;


	if(mouseIsOver(playbutton1)){

playbutton1.scale = 0.3;


}else{

playbutton1.scale = 0.2;

}


if(mousePressedOver(playbutton1)){

gameState = "play";


}

}
  

  if(gameState === "play"){
  ball.display();
  side1.display();
  side2.display();
  side3.display();
  ground.display();
  player1.visible = true;
  playbutton1.visible = false;





}






  player1.x = ball.body.position.x;
  player1.y = ball.body.position.y;
  

wood1.x = side1.body.position.x;
wood1.y = side1.body.position.y;



wood2.x = side2.body.position.x;
wood2.y = side2.body.position.y;


   

wood3.x = side3.body.position.x;
wood3.y = side3.body.position.y;






  drawSprites();

}
	function keyPressed(){

		if(keyCode === UP_ARROW && gameState === "play" && g ===0){
			Body.applyForce(ball.body,ball.body.position,{x:85,y:-85}); 
			g= g+1
			
		   } 

          



	}




