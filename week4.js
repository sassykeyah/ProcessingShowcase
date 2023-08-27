/*
    Paste the code for your week 4 exercise below.
*/
let img; // Declare variable 'img'.

function earth() {
    
    fill(0, 200, 0);
    strokeWeight(8);
    stroke('rgb(0,200,0)');
    circle(250,250,100); 
    fill(0, 0, 200);
    arc(250, 250, 100, 100, HALF_PI + QUARTER_PI, PI + QUARTER_PI);
    fill(0, 0, 200);
    arc(250, 250, 100, 100, PI +HALF_PI + QUARTER_PI, TWO_PI + QUARTER_PI);
    
  }

function setup() {
    createCanvas(500, 500);
    img = loadImage('assets/fire.jpg'); // Load the image
  }
  
  function draw() {
    background(220);
    
    stroke('rgb(0,0,0)');
    square(50,50, 400);
    
    image(img, 50, 50, 400, 400);
    earth();

  }