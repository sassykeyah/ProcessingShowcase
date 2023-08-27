/*
    Paste the code for your week 4 exercise below.
*/
let img; // Declare variable 'img'.

function earth() {
    circle(250,250,100);
    
  }

function setup() {
    createCanvas(500, 500);
    img = loadImage('assets/fire.jpg'); // Load the image
  }
  
  function draw() {
    background(220);
    
 
    square(50,50, 400);
    image(img, 50, 50, 400, 400);
    earth();

  }