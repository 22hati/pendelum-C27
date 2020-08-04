class Bob {
    constructor(x, y, radius) {
      var options = {
        'restitution':1.3,
        'friction':2,
        'density':0.2,
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      //Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(255);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  }