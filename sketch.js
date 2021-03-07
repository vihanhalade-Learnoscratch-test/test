var wall, thickness;
var bullet, speed, weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 50, 10);
  wall = createSprite(1200, 200, thickness, height/2);
  speed = random(55,90);
  weight = random(400,1500);
  rand = random(1,3);
  deformation = 0.5*weight*speed*speed;
  wall.shapeColor(80,80,80);
  
}

function draw() {
  background(255,255,255);  
 /* car.velocityX = speed;
  if (car.x - wall.x < wall.width / 2 + car.width/ 2 && wall.x - car.x < wall.width / 2 + car.width/ 2 && car.y - wall.y < wall.height / 2 + car.height/ 2 && wall.y - car.y < wall.height / 2 + car.height/ 2) {
    car.velocityX = 0;
    if (deformation<100) {
      car.shapeColor="green";
    }else{
      car.shapeColor="grey";
    }
    if (deformation>100 && deformation<180) {
      car.shapeColor="yellow";
    }else{
      car.shapeColor=("grey");
    }
    if (deformation>180) {
      car.shapeColor="red";
    }else{
      car.shapeColor=("grey");
    }
  }*/
  drawSprites();
}