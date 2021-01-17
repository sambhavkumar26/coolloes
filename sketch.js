var fixedRect, movingRect;



function setup() 
{
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 100, 50);
  movingRect = createSprite(700,200,20,100);  
  movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
}

function draw()
{
  background("yellow");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  

  console.log(movingRect.x-fixedRect.x)


  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y-movingRect.y < movingRect.height/2 + fixedRect.height/2)
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else
  {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }


  drawSprites();
}