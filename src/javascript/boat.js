class Boat {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");        
    this.boatImg = new Image();

    this.height = canvas.height;
    this.width = canvas.width;
    this.boatWidth = 43;
    this.boatHeight = 118;
    this.x = canvas.width/2 - this.boatWidth/2;
    this.y = canvas.height/2 - this.boatHeight/2;

    this.boatImg.src = './src/assets/PNG/Boats_color1/Boat_color1_4.png';

    console.log(document.body.clientWidth*0.95)
  }

  drawBoat() {
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
