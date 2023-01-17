class Canon {
    constructor(canvas) {
      this.ctx = canvas.getContext("2d");        
      this.canonImg = new Image();
  
      this.height = canvas.height;
      this.width = canvas.width;
      this.boatWidth = 43;
      this.boatHeight = 118;
    //   this.x = this.width/2 - this.boatWidth;
    //   this.y = this.height/2 - this.boatHeight/2;
            
      this.canonImg.src = './src/assets/PNG/Cannon1_color1/Cannon1_color1_3.png';   
    }
  
    drawCanon() {
      this.ctx.drawImage( 
        this.canonImg,
        41,
        -18,
        this.boatWidth,
        this.boatHeight,
        -this.boatWidth/2,
        -this.boatHeight/2,
        this.boatWidth,
        this.boatHeight
      );
    }
  
    moveCanon(direction) {
        direction === 'up'? this.ctx.translate(0, 7): this.ctx.translate(0, -7);
    }
  
  
    rotateCanon(direction) {
        const angle = 5;
        direction === 'clockwise' ? this.ctx.rotate((Math.PI/ 180)*angle) : this.ctx.rotate(-(Math.PI/ 180)*angle);
    } 
  }
