var cubito 

function setup() {
  createCanvas(1600,750);
  cubito =createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
drawSprites();
if(keyIsDown(RIGHT_ARROW)){
cubito.x=cubito.x+5;
}
if(keyIsDown(LEFT_ARROW)){
  cubito.x=cubito.x-5;
}
if(keyIsDown(DOWN_ARROW)){
  cubito.y=cubito.y+5;
}
if(keyIsDown(UP_ARROW)){
  cubito.y=cubito.y-5;
}

}





