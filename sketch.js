let button;
let button2;
let press;
let img;

function preload(){
  img = loadImage("like.png");
}

function setup(){
  noCanvas();

  button = createButton("");
  button.position(246,664);
  button.mouseClicked(buttonclicked);

  button2 = createButton("clear");
  button2.mousePressed(clearAd);
}

function mouseClicked(){
  let img = createImg("assets/ads-02.png")
  img.position(50, 1)
}