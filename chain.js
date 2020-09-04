class Chain{
    constructor(bodyA, bodyB){
        var option = {
            bodyA: bodyA, 
            bodyB: bodyB,
            length: 20,
            stiffness: 0.04  
        }
        this.chain = Matter.Constraint.create (option);
        World.add(world, this.chain);
    }
    display(){
        line (bodyA.position.x, bodyA.position.y, bodyB.position.x, bodyB.position.y);
    }
    
    


}