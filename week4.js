/*
    Paste the code for your week 4 exercise below.
*/

let img; 

// Writes the Logo Image
function logoImage() {
 
  square(50, 50, 400);
  image(img, 50, 50, 400, 400);
}

// Writes the Logo Shape & Colour
function logoShape() {

  let lemonLogoCentreX;
  let lemonLogoCentreY;
  let lemonLogoHeight;

  lemonLogoCentreX = 275;
  lemonLogoCentreY = 250;
  lemonLogoHeight = 200;

  // Lemon Shape
  strokeWeight(8);
  fill(246, 229, 20);
  arc(lemonLogoCentreX, lemonLogoCentreY, 200, lemonLogoHeight, HALF_PI, PI + HALF_PI, CHORD);
  fill(247, 235, 95);
  arc(lemonLogoCentreX, lemonLogoCentreY, 150, lemonLogoHeight, HALF_PI, PI + HALF_PI);

// Lemon Lines
  strokeWeight(3);
  
  line(lemonLogoCentreX, lemonLogoCentreY, lemonLogoCentreX - 60, lemonLogoCentreY + 64);
  line(lemonLogoCentreX, lemonLogoCentreY, lemonLogoCentreX - 60, lemonLogoCentreY - 64);
  line(lemonLogoCentreX, lemonLogoCentreY, lemonLogoCentreX - 75, lemonLogoCentreY );
}

// Writes the Logo Typography
function logoTypography() {

  textWrap(CHAR);
  textStyle(BOLDITALIC);
  strokeWeight(0);
  textSize(50);
  fill(0,0,0);
  text('LUCYS', 170, 120, );
  text('LEMONS', 150, 410 );
}

function setup() {

  createCanvas(500, 500);
  img = loadImage('assets/backgroundlemon.jpg');

}

function draw() {

  background(250,150,195);
  stroke('rgb(0,0,0)');
  logoImage();
  logoShape();
  logoTypography();
}