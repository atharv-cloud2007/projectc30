class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':20,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibilty=255
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
    
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
      if(this.body.speed>10){
        
        push()
        this.visibility=this.visibility-3
        tint(this.visibilty)
        rect(this.body.position.x,this.body.position.y,50,50)
        World.remove(world,this.body)
        pop()

      }

    }
  }