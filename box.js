class Box{
    constructor(x,y,width,height,angle){
     
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width=width;
        this.height=height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        fill ("red");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop ();
    }
}