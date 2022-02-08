var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var orangeleaf, orangeImg;
var redleaf, redImg;
var greenleaf, greenImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
  greenImg = loadImage("leaf.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  edges= createEdgeSprites();
  rabbit.collide(edges);

  var selecionar_sprites = Math.round (random(1,4))

  if (frameCount % 60 === 0){

    if (selecionar_sprites == 1){
      criarmaçãs();
    }

    if (selecionar_sprites == 2){
      criarfolhaslaranjas();
    } 

    if (selecionar_sprites == 3) {
      criarfolhasvermelhas();
    }

    if (selecionar_sprites == 4) {
      criarfolhasverdes();
    }

  }

  
  rabbit.x = World.mouseX;

  drawSprites();
  
}

function criarmaçãs(){

  apple = createSprite (random(50,350),10,10);
  apple.addImage (appleImg);
  apple.scale = 0.07;
  apple.velocityY = 4;
  apple.lifetime = 150;

}

function criarfolhaslaranjas(){

  orangeleaf = createSprite (random(50,350),10,10);
  orangeleaf.addImage (orangeImg);
  orangeleaf.scale = 0.08;
  orangeleaf.velocityY = 4;
  orangeleaf.lifetime = 150;

}

function criarfolhasvermelhas(){

  redleaf = createSprite (random(50,350),10,10);
  redleaf.addImage (redImg);
  redleaf.scale = 0.08;
  redleaf.velocityY = 4;
  redleaf.lifetime = 150;

}

function criarfolhasverdes(){

  greenleaf = createSprite (random(50,350),10,10);
  greenleaf.addImage (greenImg);
  greenleaf.scale = 0.08;
  greenleaf.velocityY = 4;
  greenleaf.lifetime = 150;

}
