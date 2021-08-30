function wAnimals(){
    var wild=createSprite(random(0,width),0,10,10);
    wild.shapeColor="red";
    wild.velocityY=6;
    wild.lifetime=300;
    wildGroup.add(wild);

  
}
function Animals(){
 
    var animal=createSprite(random(0,width),0,10,10);
    animal.shapeColor="green";
    animal.velocityY=6;
    animal.lifetime=300;
    animalGroup.add(animal);
    var num=Math.round(random(1,3));
    /*switch(num){
      case 1:animal.addAnimation("deer",deerImg);
      break;
      case 2:animal.addAnimation("fox",foxImg);
      break;
      case 3:animal.addAnimation("elephant",elephantImg);
      break;

    }*/
  
}
function Fruits(){
  var fruits=createSprite(random(0,width),0,10,10);
  fruits.shapeColor="pink"
  fruits.velocityY=6;
  fruits.lifetime=300;
  fruitGroup.add(fruits);
}
function Net(){
  var net=createSprite(width/2,height-25,20,20);
  net.shapeColor="teal";
  net.x=hunter.x;
  net.y=hunter.y;
  net.velocityY=-5;
  net.lifetime=300;
  net.depth=hunter.depth;
  hunter.depth+=1;
  netGroup.add(net);
}
function animalDestroy(){
  for(var i=0;i<animalGroup.length;i++){
    if(animalGroup[i].isTouching(netGroup)){
      animalGroup[i].destroy();
      netGroup.destroyEach();
      score=score-2;
    }
  }
}
function wildDestroy(){
  for(var i=0;i<wildGroup.length;i++){
    if(wildGroup[i].isTouching(netGroup)){
      wildGroup[i].destroy();
      netGroup.destroyEach();
      score=score+1;
    }
  }
}
function fruitsDestroy(){
  for(var i=0;i<fruitGroup.length;i++){
    if(fruitGroup[i].isTouching(hunter)){
      fruitGroup[i].destroy();
    
    }
  }
}
function destroyHealth(){
  for(var i=0;i<wildGroup.length;i++){
    if(wildGroup.isTouching(hunter)){
      health=health-1;
      console.log(health);
    }
  }
    
}


