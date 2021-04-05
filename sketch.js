
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box,kl,ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box=new Box()
    kl=new Ball(100,100,20,20)
    ball2=new Ball(200,200,20,20)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    box.display()
    kl.display()
    ball2.display()
    
}

