class Boat {
    constructor(width,height) {
        this.height = height;
        this.width = width;
        this.x = width/2;
        this.y = height/2;
        this.step = 7;
      }

    moveVertical(isUp) {
      this.y += isUp ? this.step : -this.step;
    }

    moveHorizontal(isRight) {
      this.x += isRight ? this.step : -this.step;
    }


}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const boatWidth = 43;
const boatHeight = 118;
const img = new Image();
img.onload = () => {   
    window.requestAnimationFrame(draw);
};
img.src = 'src/assets/PNG/Boats_color1/Boat_color1_4.png';



const boat = new Boat(canvas.width, canvas.height);
console.log(boat)
const saveX = canvas.width-boatWidth;
const saveY = canvas.height-boatHeight / 2;
const stepBoat = 7;
const rotateBoat = (Math.PI/180)*1;
const maxWidth = canvas.width;
const maxHeight = canvas.height;

let boatX = (saveX)/2;
let boatY = (saveX)/2;
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
 
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
    // let moveBoat = stepBoat;
    // if(rightPressed) {
    //     ctx.rotate(rotateBoat)
    // }
    // if(leftPressed) {
    //     ctx.rotate(-rotateBoat)
    // }     
    if(downPressed) {
        boat.moveVertical()
        // const { f:y, b:rx, c:ry, e:x } = ctx.getTransform();
        // const newX = x - rx*stepBoat ;
        // const newY = Math.abs(y -(ry*ry+rx*rx) -7);
        // console.log('down',newY)
        // if(newY + stepBoat > maxHeight) moveBoat = maxHeight - y;
        // if(newY + stepBoat < 0) moveBoat = y;        

        // ctx.translate(0,-moveBoat)
    }
    if(upPressed) {
        boat.moveVertical(true)
        // const { f:y, b:rx, c:ry, e:x } = ctx.getTransform();
        // const newX = x +rx*stepBoat ;
        // const newY =  Math.abs(y +ry*ry+rx*rx+7);
        // console.log('up',newY)

        // if(newY + stepBoat > maxHeight) moveBoat = maxHeight - y;
        // if(newY + stepBoat < 0) moveBoat = y;
        
        // ctx.translate(0,moveBoat)
    }
    ctx.drawImage(img,boat.x,boat.y,128,128);
    window.requestAnimationFrame(draw);
};   


