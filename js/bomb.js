class Bomb {
	constructor(game) {
		this.context = game.context;
		this.game = game;
		this.bombImg = new Image();
		this.bombImg.src = "/images/bomb.png";
		this.width = 35
		this.height = 35
		this.x = this.game.player.x
		this.y = this.game.player.y
		this.timer = 2000;
		this.alive = true;
	}
	drawBomb() {
		this.context.drawImage(
			this.bombImg,
			this.x,
			this.y,
			this.width,
			this.height
		);
	}
	// explodeBomb () {
	// 	if(!this.alive) {
	// 		bomb
	// 	}
	// }
}
