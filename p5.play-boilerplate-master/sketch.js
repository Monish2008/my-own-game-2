var people
var peoplegroup,gamestate=0
var playsound, plays
var nextslide,ns
var owlrules,or
var E,M,H
var start,Hu,o,s,Hw,p
var player,user
var G,one,Gh,Two,Gho,three,Ghost,four
var coin=[]
var coins



function preload(){


  people=loadImage("im.jpg") ;
  plays=loadSound("sound.mp3");
  ns=loadImage("Check.jpeg") ;
  or=loadImage("rules.png") ;
  E=loadImage("easy.png");
  M=loadImage("madium.png");
  H=loadImage("hard.png");
  coins=loadImage("coins.png")
  G=loadImage("pacmanghostsblue.png")
  Gh=loadImage("pacmanghostsred.png")
  Gho=loadImage("pacmanghostspink.png")
  Ghost=loadImage("pacmanghostsorange.png")
  player=loadImage("a boy.png")
  
  
  }

function setup() {
  createCanvas(displayWidth,displayHeight);
  edges=createEdgeSprites()
  
  coin.addImage(coins)

  one.addImage(G)

  Two.addImage(Gh)

  three.addImage(Gho)

  four.addImage(Ghost)

  user.addImage(player)
  
  peoplegroup=createSprite (displayWidth/2,displayHeight/2,displayWidth,displayHeight)
 
 
  peoplegroup.addImage(people)
  peoplegroup.scale=3
  nextslide=createSprite (displayWidth/2,displayHeight/2,100,100)
 
  nextslide.addImage(ns)
  
  

  //plays.play()
}



function draw() {
  background(255,255,255); 
  console.log(mouseX+","+mouseY) 

  if(gamestate==0){
    if(mousePressedOver(nextslide)){
      gamestate=1
    
    }
 
  }
  if(gamestate==1){
    nextslide.destroy()
    peoplegroup.destroy()
    
    //var owlrules
    owlrules=createSprite (displayWidth/2+200,displayHeight/2+200,150,200)
  owlrules.addImage(or)
  easy=createSprite(displayWidth/2+200,displayHeight/4+300,50,50)
  easy.addImage(E)
  medium=createSprite(displayWidth/2+200,displayHeight/2+200,50,50)
  medium.addImage(M)
  hard=createSprite(displayWidth/2+200,displayHeight/2+300)
  hard.addImage(H)
    if(mousePressedOver(easy)){
      //owlrules .destroy()
     // owlrules.visible=false
     
    
     gamestate=2


      //console.log("Hello")
    }
  }
  if(gamestate==2){
   owlrules.destroy()
   easy.destroy()
   medium.destroy()
   hard.destroy()
   background("black")
   var yo=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
   yo.shapeColor="black"
   start1=createSprite(74,280,5,300)
   start1.shapeColor="white"
   start2=createSprite(170,125,200,5)
   start2.shapeColor="white"
   start3=createSprite(170,430,200,5)
   start3.shapeColor="white"
   start4=createSprite(271,426,5,200)
   start4.shapeColor="white"
   Hu1=createSprite(351,280,5,300)
  Hu1.shapeColor="white"
  Hu2=createSprite(454,300,200,5)
  Hu2.shapeColor="white"
  Hu3=createSprite(551,280,5,300)
  Hu3.shapeColor="white"
  o1=createSprite(640,280,5,300)
  o1.shapeColor="white"
  o2=createSprite(845,280,5,300)
  o2.shapeColor="white"
  o3=createSprite(743,430,200,5)
  o3.shapeColor="white"
  o4=createSprite(743,125,200,5)
  o4.shapeColor="white"
  s1=createSprite(1028,122,200,5)
  s1.shapeColor="white"
  s2=createSprite(928,222,5,200)
  s2.shapeColor="white"
  s3=createSprite(1028,322,200,5)
  s3.shapeColor="white"
  s4=createSprite(1128,422,5,200)
  s4.shapeColor="white"
  s1=createSprite(1028,522,200,5)
  s1.shapeColor="white"
  Hw1=createSprite(1216,280,6,300)
  Hw1.shapeColor="white"
  Hw2=createSprite(1319,300,200,5)
  Hw2.shapeColor="white"
  Hw3=createSprite(1416,280,5,300)
  Hw3.shapeColor="white"
  p1=createSprite(542,801,5,150)
  p1.shapeColor="white"
  p2=createSprite(690,801,5,150)
  p2.shapeColor="white"
  user=createSprite(610,808,50,80)
  user.shapeColor="grey"
  one=createSprite(684,186,50,50)
  one.shapeColor="blue"
  Two=createSprite(780,186,50,50)
  Two.shapeColor="white"
  three=createSprite(684,345,50,50)
  three.shapeColor="yellow"
  four=createSprite(780,345,50,50)
  four.shapeColor="orange"

  fill("white")
  textSize(30)
  text("press the space key to start game",displayWidth/2,displayHeight/2)
  
  
  if(keyDown("space")){

 gamestate=3
 // console.log("sKJG")

  }
  }

  if(gamestate==3){
    for(var x=0;x<=532;x=x+50){
      coin.push(createSprite(x,843,20,20))
      
      
    }
    //for(var x=0;x<=532;x=x+50){
     // coin.push(createSprite(x,843,20,20))
   // }

    one.velocityX=4
    one.velocityY=-4
    Two.velocityX=-4
    Two.velocityY=4
    three.velocityX=-4
    three.velocityY=-4
    four.velocityY=4
    four.velocityX=4
    if(keyDown("up")){
      user.velocityY=-6
    }
    if(keyDown("down")){
      user.velocityY=6
    }
    if(keyDown("left")){
      user.velocityX=-6
    }
    if(keyDown("right")){
      user.velocityX=6
    }
    one.bounceOff(edges[0])
    one.bounceOff(edges[1])
    one.bounceOff(edges[2])
    one.bounceOff(edges[3])
    Two.bounceOff(edges[0])
    Two.bounceOff(edges[1])
    Two.bounceOff(edges[2])
    Two.bounceOff(edges[3])
    three.bounceOff(edges[0])
    three.bounceOff(edges[1])
    three.bounceOff(edges[2])
    three.bounceOff(edges[3])
   four.bounceOff(edges[0])
    four.bounceOff(edges[1])
    four.bounceOff(edges[2])
    four.bounceOff(edges[3])
  }

  console.log(gamestate)
 
  drawSprites();
}

