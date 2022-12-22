const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const boatWidth = 43;
const boatHeight = 118;
const img = new Image();

const saveX = canvas.width-boatWidth;
const saveY = canvas.height-boatHeight / 2;
const moveBoat = 7;
const rotateBoat = (Math.PI/180)*1;

let boatX = (saveX)/2;
let boatY = (saveX)/2;
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

const inRange = (number,min,max)=> {
    return number>=min && number<=max;
}


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
    console.log(ctx.getTransform()); 
};

const draw = () => {
    ctx.clearRect(-boatWidth, -boatHeight, canvas.width, canvas.height);
    if(rightPressed) {
        ctx.rotate(rotateBoat)
    }
    if(leftPressed) {
        ctx.rotate(-rotateBoat)
    }     
    if(downPressed) {
        const { f:y, b:rx, c:ry, e:x } = ctx.getTransform();
        const newX = x - rx*moveBoat ;
        const newY = Math.abs(y -(ry*ry+rx*rx) -7);
        console.log('down',newY)
        if( newY <= canvas.height && newY > 0 ) ctx.translate(0,-moveBoat)
    }
    if(upPressed) {
        const { f:y, b:rx, c:ry, e:x } = ctx.getTransform();
        const newX = x +rx*moveBoat ;
        const newY =  Math.abs(y +ry*ry+rx*rx+7);
        console.log('up',newY)
        if(newY <= canvas.height && newY > 0  ) ctx.translate(0,moveBoat)
    }
  ctx.drawImage(img,41,5,boatWidth,boatHeight,-boatWidth/2,-boatHeight/2,boatWidth,boatHeight);
    window.requestAnimationFrame(draw);
};   

window.requestAnimationFrame(draw);

img.src = 'src/assets/PNG/Boats_color1/Boat_color1_4.png';