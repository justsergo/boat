class InterfaceCanvas {
    constructor (canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");        
       
        this.boat = new Boat(canvas);
        this.canon = new Canon(canvas);

        this.rightPressed = false;
        this.leftPressed = false;
        this.upPressed = false;
        this.downPressed = false;

        this.boat.boatImg.onload = () => {  
            this.ctx.translate(
                this.canvas.width/2 - this.boat.boatWidth/2,
                this.canvas.height/2 - this.boat.boatHeight/2);
            window.requestAnimationFrame(this.draw.bind(this));
        };       
         
        document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
        document.addEventListener("keyup", this.keyUpHandler.bind(this), false);

    }

   
    keyDownHandler(e) {    
        if(e.keyCode == 37) {
            this.leftPressed = true;
        }
        if(e.keyCode == 38) {
            this.upPressed = true;
        }
        if(e.keyCode == 39) {
            this.rightPressed = true;
        }
        if(e.keyCode == 40) {
            this.downPressed = true;
        }   
    };

    keyUpHandler(e) {    
        if(e.keyCode == 37) {
            this.leftPressed = false;
        }
        if(e.keyCode == 38) {
            this.upPressed = false;
        }
        if(e.keyCode == 39) {
            this.rightPressed = false;
        }
        if(e.keyCode == 40) {
            this.downPressed = false;
        }
        console.log(this.ctx.getTransform()); 
    };

    draw () {
        this.ctx.clearRect(-this.boat.boatWidth, -this.boat.boatHeight, this.canvas.width, this.canvas.height);
        const { a:sx, b:sy, c:rx, d:ry, e:x, f:y} = this.ctx.getTransform();
        // let step = 7;
        const newX = rx > 0 ?  x + 64 : x - 64;
        const newY = ry > 0 ? y +64: y -64;
        const nextX = newX + 7;
        const nextY = newY + 7;
        // nextX >= this.canvas.width ? step = this.canvas.width : step = 7;
        // nextX <= 0 ? step = 0: step = 7;
        const condition = nextX> this.canvas.width || nextX <=0 || nextY > this.canvas.height || nextY <=0 
        if(this.rightPressed) {           
            this.boat.rotateBoat('clockwise');
        }
        if(this.leftPressed) {       
            this.boat.rotateBoat();         
        }     
        // if(this.downPressed) {               
        //     if (condition ) {
        //         this.boat.moveBoat('stop')
        //     }     
        //     this.boat.moveBoat()
        // }
        if(this.upPressed) {                 
            if (condition) {
                this.boat.moveBoat('stop')
            }          
            this.boat.moveBoat('up')
        }
        this.boat.drawBoat();
        this.canon.drawCanon();
        window.requestAnimationFrame(this.draw.bind(this));
    };   
}


// var a = matrix.a;	// scale x размер
// var b = matrix.b;	// shear y сдвиг
// var c = matrix.c;	// shear x
// var d = matrix.d;	// scale y
// var e = matrix.e;	// translate x
// var f = matrix.f;	// translate y