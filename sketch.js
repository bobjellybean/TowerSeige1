const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2, ground3;
// Ground 1
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13, box14,box15;
var box16;
// Ground 2
var box17, box18, box19, box20, box21,box22
var box23, box24, box25, box26;
var box27, box29
var polygon, slingshot;

function preload() {
  polygon_img = loadImage("sprites/polygon image 1.png")
}

function setup() {
  var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground1= new ground(400,height,800,20);
    ground2= new ground(280,250,120,10);
    ground3= new ground(480,150,100,10);

    box1= new box(258,244,15,30);
    box2= new box(263,244,15,30);
    box3= new box(273,244,15,30);
    box4= new box(278,244,15,30);
    box5= new box(283,244,15,30);
    box6= new box(288,244,15,30);
    box7= new box(293,244,15,30);
    
    box8= new box(266,204,15,30);
    box9= new box(271,204,15,30);
    box10= new box(276,204,15,30);
    box11= new box(280,204,15,30);
    box12= new box(285,204,15,30);

    box13= new box(271,175,15,30);
    box14= new box(276,175,15,30);
    box15= new box(280,175,15,30);

    box17= new box(440,90,15,30);
    box18= new box(455,90,15,30);
    box19= new box(470,90,15,30);
    box20= new box(485,90,15,30);
    box21= new box(500,90,15,30);
    box22= new box(515,90,15,30);

    box23= new box(455,50,15,30);
    box24= new box(470,50,15,30);
    box25= new box(485,50,15,30);
    box26= new box(500,50,15,30);

    box27= new box(470,10,15,30);
    box28= new box(485,10,15,30);
    var options = {
      'restitution': 0.8,
      ' density': 1.0,
      ' friction': 1.0
    }
    polygon = Bodies.circle(50,200,20, options);
    World.add(world,polygon);

    slingshot= new Slingshot(this.polygon, {x:100,y:200});
}

function draw()  {
  background("green");
  Engine.update(engine);
  ground1.display();
  ground2.display();
  ground3.display();

  fill("red");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("orange");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("yellow");
  box13.display();
  box14.display();
  box15.display();
  fill("red");
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
fill("Orange");
  box23.display();
  box24.display();
  box25.display();
  box26.display();
fill("Yellow");
  box27.display();
  box28.display();

  
  imageMode(CENTER);
  image(polygon_img,polygon.position.x, polygon.position.y,40,40);
  
  slingshot.display();
  drawSprites();
}
function mouseDragged( ){
  
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased (){
  slingshot.fly();
 
}
