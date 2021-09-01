//initate an array for the rain
let rain = [];
//initait a variable for the ground
let ground;
//initate a varible to count the rain drops
let dropCount = 0;
//initatie the grounds blue level
let groundColor = .05;

function setup() {
  createCanvas(800, 600);
  ground = new grass();
  //initaite each raindrop
  for(var i = 0; i <1000; i++){
    rain[i] = new raindrop();
  }
}

function draw() {
  
  background(30, 30, 49); 
  ground.display();

  //initiate rain falling 
  for (var i=0;i<400;i++){
    rain[i].display();
    rain[i].fall();
  }
  
}

class raindrop {
  //conruct randrop at random sizes
  constructor(){
    this.x = random(0, width);
    this.y = random(0, -height);
    
  }

  //display this instance of the raindrop

    display() {
      noStroke();
      fill(173,213,231);
      ellipse(this.x,this.y,random(1,5),random(1,5));
    }

    fall() {
      //randomize the speed the raindrops fall at
      this.speed = random(3,9);
      this.grav = 1.05;
      this.y += (this.speed*this.grav);

      //if the y vale of the rain drop is = to the top of the ground, negate the raindrops height value
      //then increase the drop count by one
      if (this.y > 500) {
        this.y = random(0,-height);
        this.grav= 0;
        dropCount += 1; 
        
       //if drop count is 10 increase ground color's blue value by 1
        if(dropCount == 10){
          dropCount = 0;
          groundColor = groundColor + 1;
        }
      }
    } 
  }

class grass {
  //construct ground
  constructor() {
    this.x=0;
    this.y=500;
    this.w=800;
    this.h=500;
    }

    //color ground
    display(){
      fill(0,52,groundColor);
      rect(this.x,this.y,this.w,this.h);
    }    

}
