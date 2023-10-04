let button;
let press;
let img;

function preload(){
  img = loadImage("like.png");
}

function setup(){
  noCanvas();

  button = createButton("click");
  button.mouseClicked(buttonclicked);
  button.doubleClicked(buttonclicked);

  press.mouseClicked(pressed);

  // button.mousePressed(clickedButton);
  // button.width = (Width in pixels)
  // button.height = (Height in pixels)

  // let img = createImg("assets/ads-02.png")
  // img.position(50, 5)
}

function mouseClicked(){
  let img = createImg("assets/ads-02.png")
  img.position(50, 1)
}