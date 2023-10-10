let button;
let button2;
let button3;
let button4;
let img;

function setup(){
  noCanvas();

  button = createButton("click");
  button.position(246,664);
  button.mouseClicked(buttonClicked);

  button2 = createButton("click");
  button2.position(300,664);
  button2.mouseClicked(buttonClicked);

  button3 = createButton("click");
  button3.position(350,664);
  button3.mouseClicked(buttonClicked);

  button4 = createButton("click");
  button4.position(745,664);
  button4.mouseClicked(buttonClicked);
}

function buttonClicked(){
  console.log("cliked");

  let ads = [
    "assets/ads01.png",
    "assets/ads02.png",
    "assets/ads03.png",
    "assets/ads04.png",
  ];

  let randomIndex = floor(random(ads.length));
  let randomImg = ads[randomIndex];
  img = createImg(randomImg)
  img.position(50, 1)

  img.mousePressed(clearImage);
}

function clearImage(){
  if (img) {
    img.remove();
  }
}

