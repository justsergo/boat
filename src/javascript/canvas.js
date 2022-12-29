class InterfaceCanvas {
    constructor (canvas) {
        
        this.window = window;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");        
        this.boatImg = new Image();
        this.canonImg = new Image();
        this.boat = new Boat(canvas.width, canvas.height, this.ctx);

        this.saveX = canvas.width-this.boat.boatWidth;
        this.saveY = canvas.height-this.boat.boatHeight / 2;
        this.stepBoat = 7;
        this.rotateBoat = (Math.PI/180)*1;
        this.maxWidth = canvas.width;
        this.maxHeight = canvas.height;

        this.boatX = (this.saveX)/2;
        this.boatY = (this.saveX)/2;
        this.rightPressed = false;
        this.leftPressed = false;
        this.upPressed = false;
        this.downPressed = false;

        this.boatImg.onload = () => {  
            this.ctx.translate(this.boat.boatWidth/2,this.boat.boatHeight/2);
            window.requestAnimationFrame(this.draw.bind(this));
        };
        this.boatImg.src = 'src/assets/PNG/Boats_color1/Boat_color1_4.png';
        this.canonImg.src = 'src/assets/PNG/Cannon1_color1/Cannon1_color1_3.png';        
         
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
            this.leftPressed = false;this.ctx
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
        this.ctx.clearRect(-this.boat.boatWidth/2, -this.boat.boatHeight/2, this.canvas.width, this.canvas.height);
        if(this.rightPressed) {
            const x = this.boat.x + (this.boat.width / 2);
            const y = this.boat.y + (this.boat.height / 2) ;
            const direction = (Math.atan2(this.boat.y,this.boat.x) * 180) / Math.PI;
            // this.ctx.save();
            // this.ctx.translate(this.canvas.width/2, this.canvas.height/2);
            this.ctx.rotate(( Math.PI / 180)*3);
        

        }
        if(this.leftPressed) {
            const x =  this.boat.x + ( this.boat.width / 2);
            const y =  this.boat.y + ( this.boat.height / 2) ;
            const direction = (Math.atan2( this.boat.y, this.boat.x) * 180) / Math.PI;
            // this.ctx.save();
            // this.ctx.translate(this.canvas.width/2, this.canvas.height/2);
            this.ctx.rotate(-(Math.PI/ 180)*3);
        
        }     
        if(this.downPressed) {
            // this.boat.moveVertical();
            this.ctx.translate(0, -7);
        }
        if(this.upPressed) {
            // this.boat.moveVertical(true);
            this.ctx.translate(0, 7);
        }
        this.ctx.drawImage(this.boatImg, 41,5, this.boat.boatWidth, this.boat.boatHeight,- this.boat.boatWidth/2,- this.boat.boatHeight/2, this.boat.boatWidth, this.boat.boatHeight);
        this.ctx.drawImage(this.canonImg, 41,-18, this.boat.boatWidth, this.boat.boatHeight,- this.boat.boatWidth/2,- this.boat.boatHeight/2, this.boat.boatWidth, this.boat.boatHeight);
        // this.ctx.restore();
        window.requestAnimationFrame(this.draw.bind(this));
    };   

}
