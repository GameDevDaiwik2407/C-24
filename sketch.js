const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000, 500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(650, 300, 80, 80);
    box2 = new Box(850, 300, 80, 80);
    box3 = new Box(650, 200, 80, 80);
    box4 = new Box(850, 200, 80, 80);
    box5 = new Box(750, 90, 80, 80);
    log1 = new Log(750, 200, 280, 20, PI);
    log2 = new Log(745, 100, 280, 20, PI);
    log3 = new Log(700, 10, 20, 170, PI/6);
    log4 = new Log(800, 10, 20, 170, PI/-6);
    ground1 = new Ground(10, 500, 2500, 50);
    pig1 = new Pig(750, 400);
    pig2 = new Pig(750, 100);
    

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display(); 
    box2.display(); 
    box3.display();
    box4.display();
    box5.display();
    ground1.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}