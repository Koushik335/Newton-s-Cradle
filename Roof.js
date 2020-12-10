class Roof {
    constructor(x, y) {
      var options = {
           isStatic:true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.x=x;
      this.y=y;
      this.body = Bodies.rectangle(x, y,500,50,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);     
      fill("blue");
      rect(0, 0, 500, 50);
      pop();
    }
  };