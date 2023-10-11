let button;
let button2;
let button3;
let button4;
let img;
let button5;
// let imgPost;

// function preload(){
//   imgPost = loadImage('post5.png');
// }

function setup(){
  noCanvas();

  imgPostElement = createImg('post5.png');
  imgPostElement.position(251, 115);
  imgPostElement.size(530,530)

  button = createButton(".");
  button.position(247,664);
  button.mouseClicked(buttonClicked);

  button2 = createButton(".");
  button2.position(297,664);
  button2.mouseClicked(buttonClicked);

  button3 = createButton(".");
  button3.position(370,664);
  button3.mouseClicked(buttonClicked);

  button4 = createButton(".");
  button4.position(745,664);
  button4.mouseClicked(buttonClicked2);

  button5 = createButton(">");
  button5.position(745, 400)
  button5.mouseClicked(buttonPressed)
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

function buttonClicked2(){
  console.log("cliked2");

  img = createImg('ads05.png')
  img.position(50, 1)

  img.mousePressed(clearImage);
}

function clearImage(){
  if (img) {
    img.remove();
  }
}

function buttonPressed(){

  let posts = [
    "posts/post1.png",
    "posts/post2.png",
    "posts/post3.png",
    "posts/post4.png",
  ];

  let randomIndex = floor(random(posts.length));
  let randomImg = posts[randomIndex];
  img = createImg(randomImg)
  img.position(251,115)
  img.size(530,530)
}
