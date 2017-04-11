var x = 0;
var speed = 3;

function setup(){
    createCanvas(600,400);
}

function draw(){
   background(50);
   flower(100,300);
   flower(200,300);
   flower(300,300);
   flower(400,300);
   
   if(mouseIsPressed){
       background(148,0,211);
 }
stroke(255);
strokeWeight(8);
fill(0,191,255);

ellipse(x,200,100,100);
 
 if(x>width || x<0){
  console.log("The circle is off the screen")
  speed = speed * -1;
} 
   
    
    x = x + speed;
console.log();
}

function flower(x,y){
    
    //petals
    noStroke();
    fill(255,20,147);
    ellipse(x+10,y-10,35,35);
    ellipse(x+10,y+10,35,35);
    ellipse(x-10,y-10,35,35);
    ellipse(x-10,y+10,35,35);
    
    //bulb
    fill(0,191,255);
    ellipse(x,y,25,25);
}


