class Obstacle {
  constructor() {
    this.x = width;
    this.size = 70;
    this.y = height - this.size;
  }
  show() {
    image(obsImg, this.x, this.y, this.size, this.size);
  }
  move() {
    this.x = this.x - 6;
  }
}
