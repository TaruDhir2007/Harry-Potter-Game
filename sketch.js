var voldy, voldyImage;
var harry, harryImage;
var snitch, snitchImage;
var bg, bgImage;
var hedwig;
var voldyGroup;
var SnitchGroup;
var score = 0;
var PLAY=1;
var OVER = 0;
var gamestate = PLAY;
var GameOverImage, GameOver;

function preload(){
voldyImage = loadImage("voldemort.png");
harryImage = loadImage("harry Potter.png");
snitchImage= loadImage("Snitchnobg.png");
bgImage = loadImage("quidditch.jpg");  
GameOverImage = loadImage("game over.png");
hedwig = loadSound("hedwigtheme.mp3");
  
}
function setup() {
  createCanvas(500, 350);
  hedwig.loop();
  harry = createSprite(50, 200, 20, 20);
  harry.addImage("Image of harry Potter", harryImage)
  harry.scale = 0.27;
  bg = createSprite(100, 175, 500, 350);
  bg.addImage("Image of harry Potter", bgImage);
  bg.velocityX = -2;
  bg.scale = 1.0;  
  bg.x= bg.width/2;
  GameOver = createSprite(200, 200, 10, 10);
  GameOver.addImage("Image of Game End", GameOverImage);
  GameOver.scale = 0.55;
  voldyGroup = new Group();
  SnitchGroup = new Group();
  
}

function draw() {
  background(0);
  if (gamestate === PLAY){
if (bg.x < 50){
bg.x = bg.width / 2;
  }
GameOver.visible = false;
spawnSnitch();
spawnVoldy();
harrymove();
         if(harry.isTouching(SnitchGroup)){
  score = score+1;
  SnitchGroup.destroyEach();
}
    if(harry.isTouching(voldyGroup)){
voldyGroup.destroyEach();
  gamestate = OVER;
  SnitchGroup.destroyEach();
  voldyGroup.destroyEach();
}
 



  harry.depth = bg.depth+1;}

   
if(gamestate === OVER){
  GameOver.visible = true;
snitch.velocityX = 0;
voldy.velocityX = 0;
}
if(keyDown("Space")){
reset();
}



  drawSprites();
  text("SCORE:"+score, 420, 30, fill("black"));
}


function harrymove(){
if(keyDown("up")){
   harry.y = harry.y-5;
 }
if(keyDown("down")){
   harry.y = harry.y+5;
}}

function reset(){
gamestate = PLAY;
GameOver.visible = false;
voldyGroup.destroyEach();
SnitchGroup.destroyEach();
  score = 0;
}
function spawnSnitch(){
   if(frameCount%90 === 0){
    snitch = createSprite(50, 200, 20, 20);
snitch.addImage("Image of snitch", snitchImage);
  snitch.scale = 0.2;
  snitch.x = Math.round(random(200, 350));
  snitch.y = Math.round(random(100, 370));
      SnitchGroup.add(snitch);
  snitch.velocityX = -6;

}
}
function spawnVoldy(){
  if(frameCount%100 === 0){
    voldy = createSprite(200, 200, 10, 10);
    voldy.addImage("Voldemort Image", voldyImage);
    voldy.scale = 0.15;
    voldy.velocityX = -4;
    voldy.x = Math.round(random(250, 350));
    voldy.y = Math.round(random(100, 270));
    voldyGroup.add(voldy);
    voldy.setCollider("rectangle",0,0, 170, 400);



}}
 