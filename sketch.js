var Ghost,GhostImage;
var Tower,TowerImage;
var PLAY = 1;
var END = 0;
var gameState=PLAY;
var Door,DoorImage;
var left,right,lefrImage,RightImage;
var DoorGroup;



function preload(){
  GhostImage = loadImage("ghost-standing.png");
  TowerImage = loadImage("tower.png");
  DoorImage = loadImage("door.png");
  leftImage = loadImage("left arrow.png");
  RightImage = loadImage("right arrow.jpg");
  

}



function setup(){
createCanvas(600,600);
    Tower = createSprite(300,300);
    Tower.addImage(TowerImage);
    Tower.scale = 0.9
    Tower.velocityY = 3;

    Ghost = createSprite(300,500);
    Ghost.addImage(GhostImage);
    Ghost.scale = 0.3

    left = createSprite(80,350);
    left.addImage(leftImage);
    left.scale = 0.1

    right = createSprite(520,350);
    right.addImage(RightImage);
    right.scale = 0.4
  
  
  
  
  
  DoorGroup = new Group();
}

function draw(){
background("black");
  
  if(gameState==PLAY){
  
  if (keyDown("left_arrow")){
    Ghost.x = Ghost.x -5;
  }
  if (keyDown("right_arrow")){
    Ghost.x = Ghost.x +5;
  }
  doors();
  if (Tower.y>600){
    Tower.y = 400;
  }
    if (mousePressedOver(right)) {
    ( Ghost.x = Ghost.x +5);
    }
    
    if (mousePressedOver(left)) {
    ( Ghost.x = Ghost.x -5);
    }
  if(DoorGroup.isTouching(Ghost)||Ghost.y>600){
    gameState = END;
  }
 
  drawSprites();
}
   if(gameState==END){
    background("red");
     textSize(40);
     fill("blue");
     stroke("Black");
     Text ("gameover");
     
   
   
   }

 
  
}

function doors(){
  if (frameCount % 100 ==0 ){
    Door = createSprite(Math.round(random(100,500)),-50)
    Door.addImage(DoorImage);
    Door.velocityY = 3;
    Door.scale = 0.10
    Door.lifetime = 250;
    Door.depth = Ghost.depth
    Ghost.depth +=1 ;
    DoorGroup.add(Door);
  }
}
