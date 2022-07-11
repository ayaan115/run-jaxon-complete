var jaxon, bomb, coin;
var energyDrink, path, pathImg;
var jaxonRunning;
var boundary1, boundary2;
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  jaxonRunning = loadAnimation("Runner-1.png", "Runner-2.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  jaxon = createSprite(200, 200, 10, 10);
  path = createSprite(200, 200, 100, 100);
  path.addAnimation("path", pathImg);
  jaxon.addAnimation("running", jaxonRunning);
  jaxon.scale = 0.1;
}

function draw() {
  background("white");
   path.velocityY = 4

   if(path.y > 400){
    path.y = height/2
   }
    
   jaxon.depth = path.depth;
   jaxon.depth = jaxon.depth +1;
  drawSprites();
}

