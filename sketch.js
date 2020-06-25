var moverect,fiyrect;
var moverect1,fiyrect1;
var moverect3,fiyrect3;


function setup() {
  createCanvas(850,1000);
  fiyrect=createSprite(400, 100, 50, 80);
  moverect=createSprite(400,600,80,30);
  fiyrect.shapeColor="green";
  moverect.shapeColor="green";
  moverect.velocityY=-10;
  
  fiyrect1=createSprite(200, 100, 50, 80);
  moverect1=createSprite(200,600,80,30);
  fiyrect1.shapeColor="green";
  moverect1.shapeColor="green";
  moverect1.velocityY=-20;

  fiyrect3=createSprite(600, 100, 50, 80);
  moverect3=createSprite(600,600,80,30);
  fiyrect3.shapeColor="green";
  moverect3.shapeColor="green";
  moverect3.velocityY=-15;
}

function draw() {
  background(255,205,255); 
  
  colision(moverect,fiyrect);

  colision(moverect1,fiyrect1);

  colision(moverect3,fiyrect3);
 

  
  drawSprites();
}
