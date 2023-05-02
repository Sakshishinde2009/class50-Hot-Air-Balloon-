var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var jumpSound;
var obsBottom1,obsBottom2,obsBottom3
var obsTop1,obsTop2;

function preload(){
bgImg = loadImage("./assets/bg.png");

balloonImg = loadAnimation("./assets/balloon1.png","./assets/balloon2.png","./assets/balloon3.png");

jumpSound = loadSound("./assets/jump.mp3");

obsBottom1 = loadImage("./assets/obsBottom1.png");
obsBottom2 = loadImage("./assets/obsBottom2.png");
obsBottom3 = loadImage("./assets/obsBottom3.png");

obsTop1 = loadImage("./assets/obsTop1.png");
obsTop2 = loadImage("./assets/obsTop2.png");
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            jumpSound.play();
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY +0.5;
   
        drawSprites();
        
}
