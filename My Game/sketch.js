var track,player1
function preload(){
    track = loadImage("Images/track.jpg")
}
function setup(){
    var canvas = createCanvas(1000,windowHeight)
    player1 = createSprite(166,windowHeight,50,50)
    player2 = createSprite(854,windowHeight,50,50)
    player1.shapeColor="blue"
    player2.shapeColor="red"
}
function draw(){
    background(0);
    image(track,0,-windowHeight*2+290,1000,windowHeight*3)
    textSize(20);
    text("x:"+mouseX,50,windowHeight-200);
    text("y:"+mouseY,50,windowHeight-175);

    if(keyDown("DOWN_ARROW")){
        player1.y-=5
    }
    camera.position.y = player1.y
    drawSprites();
}