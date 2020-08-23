const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    ball = new Ball(100,100);

    chain = new Chain(ball.body,platform.body);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();

    bird.display();
    platform.display();
    chain.display();    
}
