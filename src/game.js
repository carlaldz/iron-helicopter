class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.tick = 0;

    this.bg = new Background(ctx);
    this.helicopter = new Helicopter(ctx);
    this.obstacles = [];

    this.over.img = new Image (); 
    this.over.img.src = 'https://png.pngtree.com/png-clipart/20210311/original/pngtree-game-over-pixel-transparent-background-png-image_5995763.jpg'
  }

  start() {
    // TODO: loop. clear, draw, move, addObstacle
    //this.draw();
    this.intervalId = setInterval(() => {
      this.tick++;
      this.draw();
      this.move();
      this.addObstacle();

    }, 1000 / 60);
  }

  addObstacle() {
    // TODO: add new Obstacle every 100 ticks
    if (this.tick % 100 === 0) {
      this.obstacles.push(new Obstacles(this.ctx));
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
    // TODO: draw everything
    this.bg.draw();
    //this.obstacles.draw();
    this.helicopter.draw();
    this.obstacles.forEach(obstacle => obstacle.draw());
  }

  move() {
    // TODO: move everything
    this.bg.move();
    this.helicopter.move();
    this.obstacles.forEach(obstacle => obstacle.move());
  }

  onKeyEvent(event) {
    // TODO
    document.addEventListener("keyup", (e) => {
      this.helicopter.onKeyEvent(e.keyCode);
    });
    document.addEventListener("keydown", (e) => {
      this.helicopter.onKeyEvent(e.keyCode);
    });
  }
  gameOver(){
    this.bg.draw();
    clearInterval(this.intervalId);
    this.ctx.drawImage(this.over.img, 0, 0, this.ctx.canvas.width / 2, this.ctx.canvas.height);
  }
}