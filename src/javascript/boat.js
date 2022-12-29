class Boat {
  constructor(width,height,ctx) {
      this.height = height;
      this.width = width;
      this.boatWidth = 43;
      this.boatHeight = 118;
      this.x = width/2 - this.boatWidth;
      this.y = height/2 - this.boatHeight/2;
      this.cx = width/2+5 - this.boatWidth;
      this.cy = height/2+28 - this.boatHeight/2; 
      this.step = 7;      
    }

  moveVertical(isUp) {
    this.y += isUp ? this.step : -this.step;
    this.cy += isUp ? this.step : -this.step;
  }

  moveHorizontal(isRight) {
    this.x += isRight ? this.step : -this.step;
    this.cx += isRight ? this.step : -this.step;
  }

  rotate(isRight) {
      const angle = 180;
      this.y += isRight ? -this.x*Math.sin(angle) + this.y*Math.cos(angle):  this.x*Math.sin(angle) + this.y*Math.cos(angle);
      // this.cy += isRight ? this.cy*(Math.PI/180+1) : -this.step*(Math.PI/180+1);
      this.x += isRight ?  this.x*Math.cos(angle) + this.y*Math.sin(angle):  this.x*Math.cos(angle) - this.y*Math.sin(angle);
      // this.cx += isRight ? this.cx*(Math.PI/180+1) : -this.step*(Math.PI/180+1);
  }


}