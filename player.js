class Player {
  constructor() {
    this.x = 90;
    this.size = 60;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 1.8;
  }

  show() {
    fill("#a0c4ff");
    image(playerImg, this.x, this.y, this.size, this.size);
    stroke("#a0c4ff");
  }

  jump() {
    if (this.y == height - this.size) {
      this.velocityY = -30;
    }
  }

  move() {
    this.velocityY = this.velocityY + this.gravity;
    this.y = this.y + this.velocityY;
    this.y = constrain(this.y, 0, height - this.size);
  }

  collided(currentObs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 30,
      this.size - 30,

      currentObs.x,
      currentObs.y,
      currentObs.size - 30,
      currentObs.size - 30
    );
    return isColliding;
  }
}
