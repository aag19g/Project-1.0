let button;
let button2;
let button3;
let button4;
let ads = [];
let numAds = 4;
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
  let ad1 = createImg("assets/ads01.png");
  let ad2 = createImg("assets/ads02.png");
  let ad3 = createImg("assets/ads03.png");
  let ad4 = createImg("assets/ads04.png");
  ads = [ads1,ads2,ads3,ads4];
  let randoImg = randome(ads)
  // let img = createImg("assets/ads01.png")
  // img.position(50, 1)
  image(randoImg,50, 1)
}