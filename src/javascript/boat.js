class Boat {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");        
    this.boatImg = new Image();
    this.waveFrames = new Image();

    this.height = canvas.height;
    this.width = canvas.width;
    this.boatWidth = 43;
    this.boatHeight = 118;
    this.x = canvas.width/2 - this.boatWidth/2;
    this.y = canvas.height/2 - this.boatHeight/2;

    this.boatImg.src = './src/assets/PNG/Boats_color1/Boat_color1_4.png';    
    this.waveFrames.src = './src/assets/waveSprites4px3.png';    

    this.cols = 4;
    this.rows = 1;
    this.spriteWidth = this.waveFrames.width / this.cols;
    this.spriteHeight = this.waveFrames.height / this.rows;

    this.totalFrames = 4; //Because there are 7 sprites in total. Therefore the animation will take place over 7 frames
    this.currentFrame = 0;
    this.srcX = 0;
    this.srcY = 0;
    this.framesDrawn = 0;
  }

  drawBoat() {
    this.currentFrame = this.currentFrame % this.totalFrames;
    this.srcX = this.currentFrame * this.spriteWidth;

    this.ctx.drawImage(
      this.waveFrames,
      this.srcX,
      this.srcY,
      this.spriteWidth,
      this.spriteHeight,
      -this.boatWidth+4,
      -this.boatHeight/2,
      this.spriteWidth,
      this.spriteHeight
      );

    this.ctx.drawImage( 
      this.boatImg,
      41,
      5,
      this.boatWidth,
      this.boatHeight,
      -this.boatWidth/2,
      -this.boatHeight/2,
      this.boatWidth,
      this.boatHeight
    );

    this.framesDrawn++;
    if( this.framesDrawn >= 10){
      this.currentFrame++;
      this.framesDrawn = 0;
    }
  }

  moveBoat(direction) {
    const step = 7
    if (direction === 'stop') {
      this.ctx.translate(0, 0)
    }
    direction === 'up'? this.ctx.translate(0, step): this.ctx.translate(0, -step);
  }

  stopBoat() {
    this.ctx.translate(0, 0)
  }

  rotateBoat(direction) {
      const angle = 3;
      direction === 'clockwise' ? this.ctx.rotate((Math.PI/ 180)*angle) : this.ctx.rotate(-(Math.PI/ 180)*angle);        
  }
  
}
