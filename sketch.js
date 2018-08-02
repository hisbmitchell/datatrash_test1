
//html5 visible tag
var manImg1, manImg2;
var manImgs = [];
var investMen = [];
var manInvest;
var current;
var manImg;
var bool = true;

var bgImage;
var bgVideo;
var pressEnter = 0;


function preload() {

  manImg1 = loadImage('assets/Trash1.gif');
  manImg2 = loadImage('assets/Trash.gif');
  bg = loadImage('assets/2draw.jpg');
  
  bgImage = loadImage('assets/deathscreen3.jpg');
  bgVideo = createVideo('assets/bgVideo2.mov');

//   grow = createVideo('assets/zoom_1.mp4');

//   grow.loop();
//   grow.hide();
  
  bgVideo.loop();
  bgVideo.hide();
  
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(15);
   manImg = manImg2
 ;
}

function keyPressed(){
  if (keyCode === ENTER) {

    
    pressEnter = 1;
    

    }
    
    for (i = 0; i <= investMen.length; i++) {
    
    investMen[i].clear();
    
      }
}

function draw() {
  imageMode(CENTER);
  background('#0d02eb');
  image(bgImage, window.innerWidth/2, window.innerHeight/2, window.innerWidth, window.innerHeight  );
  if (pressEnter == 1){
    background(0);
    bgVideo.play();
    image(bgVideo, width / 2, height / 2);}
    
    
    
  
  
  fill(255);
  textSize(36);
  textFont('Courier');
  //text('DATATRASH',50,50);
 // text('Unknown error', 50, 90);
  //println ('mousex:'+mouseX+'mouseY:'+mouseY);
  

  var xPos = mouseX;
  var yPos = mouseY;
  investMen.push(new investMan(xPos, yPos, manImg));




  if (mouseX > 900 && mouseY > 100) {
    //image(grow, width / 2, height / 2);
    //grow.play();
  } else if (mouseX < 100 && mouseY > 100) {
    //background(255);
    //grow.pause();
    
    image(bgImage, window.innerWidth/2, window.innerHeight/2,window.innerWidth, window.innerHeight  );
  }
  
  function mousePressed() {
  if (bool === true) {
    manImg = manImg1;

    bool = false;
    
    println("cool!");
    
  } else {
    println("notcool...");
    
    manImg = manImg2;

    bool = true;
  }

}

for (i = 0; i < investMen.length; i++) {
    
    investMen[i].display();
   
  }
}

function investMan(x, y, img) {
  this.x = x;
  this.y = y;
  this.img = img;

  // this.bool = true;

  this.update = function() {
    this.x = mouseX;
    this.y = mouseY;
  }
  
  this.clear = function() {
    for (i = 0; i < investMen.length;i++){
      investMen.pop(investMen[i]);
    }
  }

  this.display = function() {
    imageMode(CENTER)
    image(this.img, this.x, this.y);
     
    
  }

}
