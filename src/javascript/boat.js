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

export default Boat