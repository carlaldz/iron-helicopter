class Helicopter {
  constructor(ctx) {
    this.ctx = ctx;
    this.tick = 0;

    this.x = 100;
    this.y = 0;

    this.w = 100;
    this.h = 40;

    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.ay = 0;
    this.ax = 0;
    this.g = 0.1;

    this.img = new Image();
    this.img.src =
      "https://2.bp.blogspot.com/-P6ZbLE-rnFM/WPTQh65UtMI/AAAAAAAABF8/9iYl-cIUEtIhj2JDTixyqZNeBn183AdmQCLcB/s1600/helicopter-spritesheet.png";
    this.img.frames = 4;
    this.img.frameIndex = 0;

    this.floor = this.ctx.canvas.height;
    this.canvasw = this.ctx.canvas.width; 

    this.weapon = new Weapon(this);
  }

  draw() {
    // TODO: draw helicopter image
    this.ctx.drawImage(
      this.img,
      0,
      (this.img.frameIndex / this.img.frames) * this.img.height,
      this.img.width,
      (1 / this.img.frames) * this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );

    this.tick ++;
    if (this.tick > 3) {
      this.tick = 0;
      this.img.frameIndex ++;

      if (this.img.frameIndex > 3) {
        this.img.frameIndex = 0;
      }
    }



    this.weapon.draw();
  }

  isFloor() {
    // TODO: check if floor
    if (this.y === this.floor) {
      isFloor = 'True';
    }
  }

  move() {
    // TODO: move
    this.vy += this.g;
    
    this.y += this.vy;
    this.x += this.vx;
    
    if (this.y >= this.floor - this.h){
      this.y = this.floor - this.h; 
      this.vy = 0;
    } 

    if (this.y < 0 ){
      this.y = 0;  
    }

    if (this.x < 0 ){
    this.x = 0; 
    this.vx = 0; 
    }

    if (this.x + this.w >= this.canvasw){
      this.x = this.canvasw - this.w; 
      this.vx = 0; 
    }

  }

  onKeyEvent(event) {
    // TODO
    switch (event){
      case UP:
        //sube
        this.vy = -4;
        break;
      case RIGHT:
        //derecha
        this.vx = 3;
        break;
      case LEFT:
        //izquierda
        this.vx = -3;
        break;

    }
  }
  die (obstacles){
    for (const obstacle of obstacles){
      if (
        this.x < obstacle.x + obstacle.w &&
        this.x + this.w > obstacle.x &&
        this.y < obstacle.y + obstacle.h &&
        this.y + this.h > obstacle.y
      ){
        return true; 
      }
      else {
        return false;
      }
    }
  }
}
