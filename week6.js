/*
    Paste the code for your week 3 exercise below.
*/
// let x, y;
let img; 
let r, g, b;

let lemon1 = {};
let lemon2 = {};

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
    // Ex String Concatenation
    text('LEM' + 'ONS', 150, 410 );
  }

  function logoShape(lemon) {

    let lemonLogoHeight;

    lemonLogoHeight = 200;
  
    // Lemon Shape
    stroke(r, g, b);
    strokeWeight(8);
    fill(r, g, b, 127);
    arc(lemon.x, lemon.y, 200, lemonLogoHeight, HALF_PI, PI + HALF_PI, CHORD);
    arc(lemon.x, lemon.y, 200, lemonLogoHeight, HALF_PI, PI + HALF_PI, CHORD);
    fill(r, g, b, 127);
    arc(lemon.x, lemon.y, 150, lemonLogoHeight, HALF_PI, PI + HALF_PI);
  
  // Lemon Lines
    strokeWeight(3);
    stroke(255);
    line(lemon.x, lemon.y, lemon.x - 60, lemon.y + 64);
    line(lemon.x, lemon.y, lemon.x - 60, lemon.y - 64);
    line(lemon.x, lemon.y, lemon.x - 75, lemon.y );
      
    lemon.y = lemon.y - 2;
    if (lemon.y < 0) {
      lemon.y = height;
    }
  }
  

function setup() {
  createCanvas(500, 500);
  img = loadImage('assets/backgroundlemon.jpg');
  r = random(255);
  g = random(255);
  b = random(255);

  // lemon 1 starts 1/4.
  lemon1.x = (width / 4) + 30  ;
  lemon1.y = height;

  // l1.x = width / 3;
  // l1.y = height;

  // // lemon 1 starts 2/4.
  lemon2.x = (width * 3 / 4) + 70 ;
  lemon2.y = height;

  // l2.x = width * 2 / 3 ;
  // l2.y = height;
}

function draw() {
  background(250,150,195);
  stroke('rgb(0,0,0)');
  logoImage();
  logoTypography();

  logoShape(lemon1);
  logoShape(lemon2);
}

function mouseClicked() {
   
      r = random(255);
      g = random(255);
      b = random(255);
}
