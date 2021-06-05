class Log {
    constructor (x, y, width, height, angle) {
      var object = {restitution: 0.1};
      this.body = Bodies.rectangle(x, y, width, height, object);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body, angle);
  
      World.add(world, this.body);
    }
    display () {
      var logPosition = this.body.position;
      var logAngle = this.body.angle;
      push();
      translate(logPosition.x, logPosition.y);
      rotate(logAngle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("pink")
      fill("white");
      rect(0, 0, this.width, this.height);
      pop();
    }
  } 