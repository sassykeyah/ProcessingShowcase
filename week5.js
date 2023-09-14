// Where is the circle
let x, y;
let img; 

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


function setup() {
  createCanvas(500, 500);
  img = loadImage('assets/backgroundlemon.jpg');
  // Starts in the middle
  x = width / 2;
  y = height;
}

function draw() {
  background(250,150,195);
  stroke('rgb(0,0,0)');
  logoImage();
  logoTypography();
  
  // Draw a circle
  
    lemonLogoHeight = 200;
  
    // Lemon Shape
    strokeWeight(8);
    fill(246, 229, 20);
    arc(x, y, 200, lemonLogoHeight, HALF_PI, PI + HALF_PI, CHORD);
    arc(x, y, 200, lemonLogoHeight, HALF_PI, PI + HALF_PI, CHORD);
    fill(247, 235, 95);
    arc(x, y, 150, lemonLogoHeight, HALF_PI, PI + HALF_PI);
  
  // Lemon Lines
    strokeWeight(3);
    
    line(x, y, x - 60, y + 64);
    line(x, y, x - 60, y - 64);
    line(x, y, x - 75, y );
 
   // Moving up at a constant speed
   y = y - 1;
  
   // Reset to the bottom
   if (y < 0) {
     y = height;
   }
 
 
}