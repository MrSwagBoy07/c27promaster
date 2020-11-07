class Chain {
    constructor(bodyA,bodyB){
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            lenght:10,
            stiffness:0.06,
        }
    this.Chain=Matter.Constraint.create(option)
    World.add(world,this.Chain);
    }
    display(){
        strokeWeight(10);
        var pointA=this.Chain.bodyA.position;
        var pointB=this.Chain.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}