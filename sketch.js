var egg,eggsImage
var startButton
var hide
var gameState="buildState"
var bBackground
var startButtonImage
var backgroundImage
var toolbox,toolboxImage
var pig,pigImage
function preload() {
  backgroundImage=loadImage("yeet.jpeg");
eggsImage=loadImage("egg.png")
bBackgroundImage=loadImage("bBackground.jpeg")
startButtonImage=loadImage("button.png")
pigImage=loadImage("pig2.png")
toolboxImage=loadImage("tool box.png")
}

function setup() {
createCanvas(displayWidth,displayHeight)
startButton=createSprite(300,300)
    startButton.addImage(startButtonImage)
    startButton.scale=.3
    startButton.visible=true
pig=createSprite(300,650,50,50);
pig.addImage(pigImage)
toolbox=createSprite(125,200,50,50);
toolbox.addImage(toolboxImage)
toolbox.scale=0.3
}

function draw() {
  if(gameState==="buildState"){
    background(bBackgroundImage)
    
    if(mousePressedOver(startButton)){
      

      gameState="destroy"
      startButton.visible=false
    pig.visible=false
toolbox.visible=false

    }
   
  }
  else if(gameState==="destroy"){
background(backgroundImage)
egg=createSprite(displayWidth-200,460)
egg.addImage(eggsImage)
egg.scale=0.3
  }
drawSprites();

}