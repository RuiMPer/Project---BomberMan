class Game {
	constructor(canvas) {
		this.canvas = canvas;
		this.context = canvas.getContext("2d");
		this.width = canvas.width;
		this.height = canvas.height;
		this.map = new Map(this);
	}
	start() {
		this.animation()
	}
	animation() {
		this.map.drawLevel();
		this.map.update();
		this.animationId = window.requestAnimationFrame(() => {
			if (this.gameON) {
				this.animation();
			} else {
				this.gameOver();
			}
		});
	}
}
