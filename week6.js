/*
    Paste the code for your week 3 exercise below.
*/
let x, y;
let img; 
let r, g, b;

// Writes the Logo Image
function logoImage() {
 
  square(50, 50, 400);
  image(img, 50, 50, 400, 400);

}
function logoTypography() {

    textWrap(CHAR);
    textStyle(BOLDITALIC);
    strokeWeight(0);
    textSize(50);
    fill(0,0,0);
    text('LUCYS', 170, 120, );
    text('LEMONS', 150, 410 );
  }
  function logoShape() {

   
    let lemonLogoHeight;

    lemonLogoHeight = 200;
  
    // Lemon Shape
    stroke(r, g, b);
  fill(r, g, b, 127);
    arc(x, y, 200, lemonLogoHeight, HALF_PI, PI + HALF_PI, CHORD);
    arc(x, y, 200, lemonLogoHeight, HALF_PI, PI + HALF_PI, CHORD);
    fill(r, g, b, 127);
    arc(x, y, 150, lemonLogoHeight, HALF_PI, PI + HALF_PI);
  
  // Lemon Lines
    strokeWeight(3);
    stroke(255);
    line(x, y, x - 60, y + 64);
    line(x, y, x - 60, y - 64);
    line(x, y, x - 75, y );
 
    
  }
  

function setup() {
  createCanvas(500, 500);
  img = loadImage('assets/backgroundlemon.jpg');
  r = random(255);
  g = random(255);
  b = random(255);
  // Starts in the middle
  x = width / 2;
  y = height;

}

function draw() {
  background(250,150,195);
  stroke('rgb(0,0,0)');
  logoImage();
  logoTypography();
  logoShape();
  
  
  
  // Draw a circle
  
  
  // Jiggling randomly on the horizontal axis
  x = 300 + random(2, 2);
  // Moving up at a constant speed
  y = y - 2;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }

}
function mouseClicked() {
   
      r = random(255);
      g = random(255);
      b = random(255);
}
