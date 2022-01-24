var squares;
var triangle;
var obstacle;
var ground;
var player;
var backgroundImg;
var obstaclesGroup;
var score = 0;



function preload(){


  backgroundImg = loadImage("./Images/bg.png");
  playerImg = loadImage("./Images/kid.jpg");
  squares = loadImage("./Images/square.png");
  triangle = loadImage("./Images/spike---image.png");
}


function setup(){

  createCanvas(1200, 400);

  player = createSprite(50, 275, 25, 25);
  player.addAnimation("playerImg", playerImg);
  player.scale= 0.1;
  player.velocityX = 3;
  ground = createSprite(200,310,600,20);
  

  ground.x = ground.width /2;
  ground.velocityX = -6;
  ground.visible = false;

  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;

  obstaclesGroup = new Group();

  


}




function draw(){

  background(backgroundImg); 

  ground.velocityX = -6;

  if(keyDown("space") && player.y >= 159) {

    player.velocityY = -12;
    
  }

  player.velocityY = player.velocityY + 0.8;

  if(obstaclesGroup.isTouching(player)){

    text("Game Ended!!", 600, 200);
  }

  
  


  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  

  
  spawnObstacles();
  drawSprites();

}



function spawnObstacles(){


  if(frameCount % 60 === 0){

    var obstacle = createSprite(600, 165, 10, 40);
    obstacle.velocityX = -(6 + 3*score/100);
    

    var rand = Math.round(random(1,2));
    switch(rand){
      case 1: obstacle.addImage(squares);
              break;
      case 2: obstacle.addImage(triangle);
              break;
      default: break;
   }

   obstacle.scale = 0.5;
   squares.scale = 0.1;
   obstacle.lifetime = 300;
   obstaclesGroup.add(obstacle);
  }
}