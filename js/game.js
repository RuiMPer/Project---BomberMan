class Game {
	constructor(canvas) {
		this.canvas = canvas;
		this.context = canvas.getContext("2d");
		this.width = canvas.width;
		this.height = canvas.height;
		this.map = new Map(this);
		this.player1 = new Player1(this);
		this.player2 = new Player2(this);
		// this.bomb = new Bomb(this);
		this.player1.setControls();
		this.player2.setControls();
		this.animationId;
		this.frame = 0;
		this.gameON = true;
	}
	draw() {
		this.map.draw();
		this.player1.drawPlayer();
		this.player2.drawPlayer();
		// since bombs will be more then one, will be in an array, we'll loop on that array
		for (let bomb of this.player1.bomb1) {
			bomb.drawBomb();
		}
		for (let bomb of this.player2.bomb2) {
			bomb.drawBomb();
		}
	}
	update() {
		this.frame++;
		// this.player1.checkCollision();
	}
	animation(timestamp) {
		this.draw();
		this.update();
		this.animationId = window.requestAnimationFrame(timestamp => {
			this.animation(timestamp);
		});
	}
	start() {
		this.map.setUpLevel();
		this.animation();
	}
	// reset () {
	// 	this.
	// }
}
