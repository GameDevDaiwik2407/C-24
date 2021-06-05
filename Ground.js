class Ground {
    constructor (x, y, width, height) {
      var object = {isStatic: true};
      this.body = Bodies.rectangle(x, y, width, height, object);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display () {
      var boxPosition = this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(boxPosition.x, boxPosition.y, this.width, this.height);
    }
  } 