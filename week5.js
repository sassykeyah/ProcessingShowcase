/*
    Paste the code for your week 5 exercise below.
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


    for (let i = 0; i < 2; i++) {

        let arcDiff = 50;
        let lemonLogoWidthCalc = 200;
        let arcMode;

        if (i == 0) {
            fill(246, 229, 20);
            arcMode = CHORD;

        } else {
            fill(247, 235, 95);
            lemonLogoWidthCalc = lemonLogoWidthCalc - arcDiff;
        }
        
        arc(lemonLogoCentreX, lemonLogoCentreY, lemonLogoWidthCalc, lemonLogoHeight, HALF_PI, PI + HALF_PI, arcMode);

    }
    //   fill(246, 229, 20);
    //   arc(lemonLogoCentreX, lemonLogoCentreY, 200, lemonLogoHeight, HALF_PI, PI + HALF_PI, CHORD);
    //   fill(247, 235, 95);
    //   arc(lemonLogoCentreX, lemonLogoCentreY, 150, lemonLogoHeight, HALF_PI, PI + HALF_PI);

    // Lemon Lines
    strokeWeight(3);

    for (let i = 0; i < 3; i++) {
        let lineDiff = 15;
        let lemonLogoCentreXCalc = lemonLogoCentreX - 60;

        if (i == 1) {
            lemonLogoCentreXCalc = lemonLogoCentreXCalc - lineDiff;
        }
        line(lemonLogoCentreX, lemonLogoCentreY, lemonLogoCentreXCalc, lemonLogoCentreY - 64 + (64 * i));
    }

    //   line(lemonLogoCentreX, lemonLogoCentreY, lemonLogoCentreX - 60, lemonLogoCentreY + 64);
    //   line(lemonLogoCentreX, lemonLogoCentreY, lemonLogoCentreX - 75, lemonLogoCentreY );
    //   line(lemonLogoCentreX, lemonLogoCentreY, lemonLogoCentreX - 60, lemonLogoCentreY - 64);
}

// Writes the Logo Typography
function logoTypography() {

    textWrap(CHAR);
    textStyle(BOLDITALIC);
    strokeWeight(0);
    textSize(50);
    fill(0, 0, 0);
    text('LUCYS', 170, 120,);
    text('LEMONS', 150, 410);
}

function setup() {

    createCanvas(500, 500);
    img = loadImage('assets/backgroundlemon.jpg');

}

function draw() {

    background(250, 150, 195);
    stroke('rgb(0,0,0)');
    logoImage();
    logoShape();
    logoTypography();
}