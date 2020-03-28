class Bomb {
  constructor(player) {
    this.context = player.game.context;
    this.player = player;
    this.bombImg = new Image();
    this.bombImg.src = "/images/bomb.png";
    this.width = 50;
    this.height = 50;
    //change the col and rol to x and y, since we want to draw it exactly where the player is
    this.x = this.player.x;
    this.y = this.player.y;
    this.timer = 2000;
    this.alive = true;
    this.exploded = false;
	}
	drawBomb() {
		// this.context.beginPath()
		// this.context.fillStyle = "black"
		// this.context.arc(this.x, this.y, 25, 0, 2*Math.PI)
		// this.context.fill()
		this.context.drawImage(
			this.bombImg,
			this.x,
			this.y,
			this.width,
			this.height
		);
		console.log("bomb");
	}
	// explodeBomb() {
	// 	if (!this.alive) {
	// 		bomb;
	// 	}
	// }
}
