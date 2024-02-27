var GameState = "wait"

function preload(){
    Menu_Screen = loadImage('i.gif')
}
function setup(){
    Play_Button = createImg('start_button-removebg-preview.png')
    About_Button = createImg('question_mark-removebg-preview.png')
    Play_Button.position (150,200)
    About_Button.position (162,300)
    About_Button.size (75,75)
    Play_Button.size (100,50)
}
function draw(){
    

if (GameState == "wait")
{background(Menu_Screen);
Play_Button.show();
About_Button.show();

}
    About_Button.mousePressed(() => {
Play_Button.hide();
About_Button.hide()
GameState = "about"
    })
    Play_Button.mousePressed(() => {
        Play_Button.hide();
        About_Button.hide()
        GameState = "play"
            })
    if (GameState == "about"){
        About_Game()
    }
if (GameState == "play"){
    
    createCanvas(600,600)
    background("white")
    var Player = createSprite(300,300,10,10)
    Player.shapeColor = "red"
    if (keyDown("UP_ARROW")) {
  
        Player.velocityX=0;
        Player.velocityY=-4;
        }
        if (keyDown(DOWN_ARROW)) {
          
        Player.velocityX=0;
        Player.velocityY=4;
        }
        if (keyDown(LEFT_ARROW)) {
          
        Player.velocityX=-4;
        Player.velocityY=0;
        }
        if (keyDown(RIGHT_ARROW)) {
          
        Player.velocityX=4;
        Player.velocityY=0;
        }
        background("white")
    var wall1 = createSprite(30,300,10,550)
    var wall1 = createSprite(300,25,550,10)
    var wall1 = createSprite(300,580,550,10)
    var wall1 = createSprite(570,300,10,550)
}
drawSprites();
}
function About_Game(){
    swal({
title:"About Game",
text:"kill all the enemies visible to win the game",
textAlign:"centre",
//imageUrl:"",
//imageSize:"",
confirmButtonText:"kill all enemies",
confirmButtonColor:"green",

    },
    function(){
        GameState = "wait"
    })
}