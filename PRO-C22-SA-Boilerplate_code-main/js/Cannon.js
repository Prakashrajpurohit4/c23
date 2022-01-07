class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonimg= loadImage("./assets/canon.png")
    this.cannonbaseimg= loadImage("./assets/cannonBase.png")

  }
  show(){
    push()
    imageMode(CENTER)
    image(this.cannonimg,this.x,this.y,this.width,this.height)
    pop()
    image(this.cannonbaseimg,70,30,200,200)
  }
}
