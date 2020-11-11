var speed,speed2,speed3;
var car1,car2,car3;
var wall,wall2,wall3,wall4;
var hitPlace,hitPlace2,hitPlace3;

function setup() {
  createCanvas(1200,400);
  car1 = createSprite(100,100,20,20);
  car1.shapeColor = "yellow";
  car2 = createSprite(100,200,20,20);
  car2.shapeColor = "yellow";
  car3 = createSprite(100,300,20,20);
  car3.shapeColor = "yellow";
  wall = createSprite(800,150,1600,20);
  wall2 = createSprite(800,250,1600,20);
  wall3 = createSprite(800,350,1600,20);
  wall4 = createSprite(800,50,1600,20);
  hitPlace = createSprite(1100,200,10,40);
  hitPlace2 = createSprite(1100,100,10,40);
  hitPlace3 = createSprite(1100,300,10,40);
  speed=random(55,90);
  speed2=random(55,90);
  speed3=random(55,90);
  
}

function draw() {
  
  car1.velocityX=speed;
  car2.velocityX=speed2;
  car3.velocityX=speed3;

  if (car2.x - hitPlace.x < car2.width/2 +hitPlace.width/2
      && car2.y - hitPlace.y < car2.width/2 +hitPlace.width/2
      && hitPlace.x - car2.x < car2.width/2 +hitPlace.width/2
      && hitPlace.y - car2.y < car2.width/2 +hitPlace.width/2)
      {
        car2.velocityX=0;
        
        
      }
      if (car1.x - hitPlace2.x < car1.width/2 +hitPlace2.width/2
        && car1.y - hitPlace2.y < car1.width/2 +hitPlace2.width/2
        && hitPlace2.x - car1.x < car1.width/2 +hitPlace2.width/2
        && hitPlace2.y - car1.y < car1.width/2 +hitPlace2.width/2)
        {
          car1.velocityX=0;
          
          
        }
        if (car3.x - hitPlace3.x < car3.width/2 +hitPlace3.width/2
          && car3.y - hitPlace3.y < car3.width/2 +hitPlace3.width/2
          && hitPlace3.x - car3.x < car3.width/2 +hitPlace3.width/2
          && hitPlace3.y - car3.y < car3.width/2 +hitPlace3.width/2)
          {
            car3.velocityX=0;
            
            
          }
  background("blue");  
  drawSprites();
}