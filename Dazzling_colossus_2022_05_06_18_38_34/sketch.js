let currentColor= (255);
var pinkDist;
var greenDist;
var blueDist;
var redDist;
let img;

function setup() {
  createCanvas(600, 500);
 img= loadImage('dog.jpeg');
  
}


function draw(){
  noStroke();
 image(img, 350,100);  
 
  //pinkcircle
   fill(252, 104, 166);
  ellipse(50,100,50,50); 
  
  //greencircle
  fill(126, 252, 104);
  ellipse(50,170,50,50);
  
  //bluecircle
  fill(104, 185, 252);
  ellipse(50,240,50,50);
  
  //redcircle
  fill(252, 104, 104);
  ellipse(50,310,50,50);
  
  //aguacircle
  fill(3, 252, 211);
  ellipse(360,100,50,50);
  
  //orangecircle
  fill(252, 165, 3);
  ellipse(360,170,50,50);
  
  //yellowcircle
  fill(252, 252, 3);
  ellipse(360,240,50,50);
  
  //purplecircle
  fill(205, 35, 217);
  ellipse(360,310,50,50)
  
   if (mouseIsPressed == true) {
      fill(currentColor);
      ellipse(mouseX,mouseY,20,20);
    }
  
  pinkDist = dist(mouseX, mouseY, 50,100);
  greenDist = dist(mouseX, mouseY, 50,170);
 blueDist = dist(mouseX, mouseY,50,240);
  redDist = dist(mouseX, mouseY, 50,310);
  

    if (mouseIsPressed && pinkDist<20 ) {
      currentColor= '#fc68a6' ; 
    }
  
  else if (mouseIsPressed && greenDist<20) {
      currentColor= '#7efc68';
    }
  else if (mouseIsPressed && blueDist<20) {
      currentColor= '#68b9fc';
    }
     else if (mouseIsPressed && redDist<20) {
      currentColor= '#fc6868' ;
    }
  else{
    
  }
    
  if(keyIsPressed){
        if(key == 'a'){
            fill(3, 252, 211);
        }else if(key == 'o'){
            fill(252, 165, 3);
        }else if(key == 'y'){
            fill(252, 252, 3);
        }else if(key=='p'){
          fill(205, 35, 217);
        }
if(mouseIsPressed){
        ellipse(mouseX,mouseY,20,20);
  }
         
}
  //namingbuttons
  fill(0);
  textSize(20);
  text('a',360,100);
  text('o',360,170);
  text('y',360,240);
  text('p',360,310);
  textSize(15);
  text('Click the pink, green, blue, or red circle to draw with that color.', 15,30);
  text('Press the a, o, y, or p key to draw with the color of the cirlce labeled with that letter.', 15,50);
  

  
}
