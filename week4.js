/*
    Paste the code for your week 4 exercise below.
*/
let img; // Declare variable 'img'.



let lemonFont;

function preLoad() {
  lemonFont = loadFont('assets/FunctionPro-Bold-webfont.ttf');
}

function logoBox() {
  strokeWeight(8);
  stroke('rgb(0,0,0)');
  fill(248, 172, 199);
  square(50, 50, 400);


  //image(img, 50, 50, 400, 400);
}
function logoLemon() {

  fill(0, 200, 0);
  strokeWeight(8);
  stroke('rgb(0,0,0)');

  fill(246, 229, 20);
  arc(250, 250, 200, 200, HALF_PI, PI + HALF_PI, CHORD);
  fill(247, 235, 95);
  arc(250, 250, 150, 200, HALF_PI, PI + HALF_PI);

}
function logoText() {
  textWrap(CHAR);
  textStyle(BOLDITALIC);
  
  strokeWeight(0);
  textSize(50);
  text('LUCYS', 170, 120, );
  text('LEMONS', 150, 410 );

}
function setup() {
  createCanvas(500, 500);
  img = loadImage('assets/forest.jpg'); // Load the image


}

function draw() {
  background(220);

  stroke('rgb(0,0,0)');
  logoBox();
  logoLemon();
  logoText();

}