var ball;

//to load images, animations and sound
function preload() {

}

//to create canvas and sprites
function setup() {
  createCanvas(400, 400);

  //ball sprite
  ball = createSprite(200, 200, 30, 30);
  ball.shapeColor = "#FB2576";

}


//game functionalities
function draw() {
  background("black");

  //change background color to "#DEBACE" when up arrow is pressed
  if (keyDown("up")) {
    background("#DEBACE");
  }

  //change background color to "#CFF5E7" when down arrow is pressed
  if (keyDown("down")) {
    background("#CFF5E7")
  }

  //change background color to "#B9E0FF" when left arrow is pressed
  if (keyDown("left")) {
    background("#b9e0ff")
  }


  //change background color to "#FFE1E1" when right arrow is pressed
  if (keyDown("right")) {
    background("#ffe1e1")
  }
  console.log("hello")
  drawSprites();
}
