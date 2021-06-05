class Box {
  constructor (x, y, width, height) {
    var object = {restitution: 0.2};
    this.body = Bodies.rectangle(x, y, width, height, object);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }
  display () {
    var boxPosition = this.body.position;
    var boxAngle = this.body.angle;
    push();
    translate(boxPosition.x, boxPosition.y);
    rotate(boxAngle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("orange")
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
  }
} 