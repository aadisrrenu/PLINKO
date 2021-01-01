class Division extends Ground {
  display() {
    var Color = color("yellow");
    var pos = this.body.position;
    rectMode(CENTER);
    fill(Color);
    rect(pos.x, pos.y, this.width, this.height);
  }
}
