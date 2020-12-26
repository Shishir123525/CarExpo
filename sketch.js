var car,wall,deformation
var speed,weight
function setup() {
  createCanvas(1600,400);
 car=createSprite(400, 200, 50, 50);
 wall=createSprite(1300,200,50,height/2)
}

function draw() {
  background("black");  
 
  speed=Math.round(random(55,90))
  weight=Math.round(random(400,1500))
  car.velocityX=speed
  deformation=0.5*weight*speed*speed/22509
  
if(car.isTouching(wall)&&deformation<100){
  car.shapeColor="green"
  car.velocityX=0
}
  
if(car.isTouching(wall)&&deformation>100&&deformation<180){
  car.shapeColor="yellow"
  car.velocityX=0
}
if(car.isTouching(wall)&&deformation>180){
  car.shapeColor="red"
  car.velocityX=0
}
drawSprites();
}
  

