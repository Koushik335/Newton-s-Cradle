class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){

        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.4,
            length:300,
            pointB:{x:offsetX , y:offsetY}
        }
        this.chain = Constraint.create(options);
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        World.add(world,this.chain);
    }
    display(){
      var posA = this.chain.bodyA.position;
      var posB = this.chain.bodyB.position;
      strokeWeight(4);
      stroke("black")
      line(posA.x,posA.y,posB.x+this.offsetX,posB.y+this.offsetY);
    }
}