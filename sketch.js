var star,planet1,planet2,planet3,planet4;
var starimg,planet1img,planet2img,planet3img,planet4img
var starscale;
var colliderscale
function preload(){
starimg=loadImage("star.png")
planet1img=loadImage("planet1.png")
planet2img=loadImage("planet2.png")
planet3img=loadImage("planet3.png")
planet4img=loadImage("planet4.png")
}


function setup() {
  createCanvas(800,800);
  colliderscale = 850;
  starscale=0.0000000003;
  planet1=createSprite(500,400,50,50);
 
  planet1.setCollider("circle",0,0,90);
  
  planet1.addImage("planet1",planet1img);
  planet1.scale=0.06
  planet2=createSprite(235,400,50,50);
  planet2.scale=0.1;
  
  planet2.setCollider("circle",0,0,40);
  
  planet2.addImage("planet2",planet2img);
  planet3=createSprite(400,175,50,50);
  planet3.scale=0.1
  planet3.setCollider("circle",0,0,40);
  
  planet3.addImage("planet3",planet3img);
  planet4=createSprite(400,700,50,50);
   planet4.setCollider("circle",0,0,40);
  
  planet4.addImage("planet4",planet4img);
 planet4.scale=0.3;
  star=createSprite(400,400,30,30);
  star.addImage("star",starimg)
}

function draw() {
  background('black');

  if(frameCount%1==0){
    starscale=starscale+0.001;
    star.scale=starscale;
    colliderscale=colliderscale+0.001;
    star.setCollider("circle",0,0,colliderscale);
  }
  if (star.collide(planet1)) {
    planet1.destroy();
  }
  if (star.collide(planet2)) {
   planet2.destroy();
  }
  if (star.collide(planet3)) {
   planet3.destroy();
  }
  if (star.collide(planet4)) {
   planet4.destroy();
  }
  noFill(); 
  stroke("white");
  ellipse(400,400,210);
  ellipse(400,400,335);
  ellipse(400,400,450);
  ellipse(400,400,610);

  drawSprites();
}