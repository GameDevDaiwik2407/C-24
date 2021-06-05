class Pig {
    constructor (x, y) {
      var object = {restitution: 0.2};
      this.body = Bodies.rectangle(x, y, 10, 10, object);
      this.x = x;
      this.y = y;
    //   this.width = width;
    //   this.height = height;
  
      World.add(world, this.body);
    }
    display () {
      var pigPosition = this.body.position;
      var pigAngle = this.body.angle;
      push();
      translate(pigPosition.x, pigPosition.y);
      rotate(pigAngle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green")
      fill("blue");
      rect(0, 0, 40, 40);
      pop();
    }
  } 