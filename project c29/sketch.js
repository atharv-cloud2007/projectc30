const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;
var engine, world;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12,box13,box14;
var polygon,chain
function setup(){
   createCanvas(1200,700);
    
    engine = Engine.create();
    world = engine.world;

    stand1=new Ground(500,450,350,20)
    box1 = new Box(400,400,50,50)
    box2 = new Box(450,400,50,50)
    box3 = new Box(500,400,50,50)
    box4 = new Box(550,400,50,50)
    box5 = new Box(450,350,50,50)
    box6 = new Box(500,350,50,50)
    box7 = new Box(470,300,50,50)

    stand2 = new Ground(900,350,350,20)
    box8 = new Box(800,300,50,50)
    box9 = new Box(850,300,50,50)
    box10 = new Box(900,300,50,50)
    box11 = new Box(950,300,50,50)
    box12 = new Box(850,250,50,50)
    box13 = new Box(900,250,50,50)
    box14 = new Box(870,200,50,50)

    polygon= new Rock(100,100,100,100)
    
    chain = new Chain(polygon.body,{x:100,y:200})
    

}
function draw(){
    background(255,255,255)

    stand1.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()


    stand2.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    
    chain.display()
    polygon.display()
    Engine.update(engine);
}
function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	chain.fly()
	}
	function keyPressed(){
	if(keyCode==32){
		chain.attach(polygon.body)
	}
	}