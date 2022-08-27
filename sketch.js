
var background;
var sonrisa;
var coete
//background
var inicio;
var inicioImg;
//jugador
var juego1;
var juego1img;
var jugador;


function preload(){
  inicioImg=loadImage("./imagenes/BOTON PLAY.png");
 // sonrisa = loadImage("./imagenes/nyctophobia4.png");
//coete = loadImage("./imagenes/sprite_1.png")

juego1img=loadImage("./imagenes/paredes.png");
  
  
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  //dientes = createSprite(270,200);
 //dientes.addImage(sonrisa);
 // dientes.scale= 1;

  inicio=createSprite(width/2,height/2);
  inicio.addImage(inicioImg);



 

  
 
}

function draw() {
  background("black");

  if(keyDown("space")){
    inicioJuego();
     
  }

  if(keyDown("up")){
      jugador.position.y=jugador.position.y-1;
      //juego1.position.y=juego1.position.y-1;
     camera.position.y=jugador.position.y;
     juego1.scale=juego1.scale+0.2;
    }

    if(keyDown("down")){
      jugador.position.y=jugador.position.y+1;
      camera.position.y= jugador.position.y;
      //juego1.position.y=juego1.position.y+1;
      juego1.scale=juego1.scale-0.2;
    }
  
  drawSprites()
}

function inicioJuego(){
  inicio.visible=false;
    juego1=createSprite(width/2,height/2,width,height*5);
    juego1.addImage(juego1img);
    //juego1.scale=0.4; 
    jugador= createSprite(250,200,5,5);
    jugador.visible=false;

  
 
  
    
   
}
