const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const boatWidth = 43;
const boatHeight = 118;
const img = new Image();

const saveX = canvas.width-boatWidth;
const saveY = canvas.height-boatHeight / 2;

let boatX = (saveX)/2;
let boatY = (saveX)/2;
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;


img.onload = () => {   
    ctx.translate(boatWidth/2,boatHeight/2);
    ctx.drawImage(img,41,5,boatWidth,boatHeight,-boatWidth/2,-boatHeight/2,boatWidth,boatHeight); 
    console.log(ctx.getTransform());
};
    
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {    
    if(e.keyCode == 37) {
        leftPressed = true;
    }
    if(e.keyCode == 38) {
        upPressed = true;
    }
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    if(e.keyCode == 40) {
        downPressed = true;
    }   
    console.log(ctx.getTransform()); 
};

function keyUpHandler(e) {    
    if(e.keyCode == 37) {
        leftPressed = false;
    }
    if(e.keyCode == 38) {
        upPressed = false;
    }
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    if(e.keyCode == 40) {
        downPressed = false;
    }
};

const draw = () => {
    ctx.clearRect(-boatWidth, -boatHeight, canvas.width, canvas.height);
    if(rightPressed) {
        ctx.rotate((Math.PI/180)*5)
    }
    if(leftPressed) {
        ctx.rotate(-(Math.PI/180)*5)
    }     
    if(downPressed) {
        const newY = boatY + 7;
        boatY =  newY < saveX ? newY : saveX;
        ctx.translate(0,-10)
    }
    if(upPressed) {
        const { f } = ctx.getTransform();
        if(f + 7 < saveY) ctx.translate(0,7)
    }
  ctx.drawImage(img,41,5,boatWidth,boatHeight,-boatWidth/2,-boatHeight/2,boatWidth,boatHeight);
    window.requestAnimationFrame(draw);
};   

window.requestAnimationFrame(draw);

img.src = 'src/assets/PNG/Boats_color1/Boat_color1_4.png';