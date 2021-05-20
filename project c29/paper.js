class Rock
 {
    constructor(x,y,width,height) {
      var options = {
          'restitution':0.1,
          'friction':1.1,
          'density':1.5
      }
      this.width=width
      this.height=height 
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image=loadImage("polygon.png")
      World.add( world,this.body);
     
    }
    display(){
      var pos=this.body.position
      push()
      translate(pos.x,pos.y)
      imageMode(CENTER)
      image(this.image,0,0,this.width,this.height)
      pop()
    }
  };
  