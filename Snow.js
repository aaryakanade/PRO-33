class Snow{
    constructor(x, y, r) {
        var options = {
            'restitution':0.2,
            'friction':0.001,
            'density':0.2,
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
      }
      update(){
        if(this.body.position.y > height){
           Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,400)})  ;   
        }
      }
      display(){ 
       var snowpos = this.body.position;
        push();
        translate(snowpos.x, snowpos.y);
       ellipseMode(RADIUS);
       fill("white");
       ellipse(0,0,this.r,this.r);
       pop();
      }
}