class Game {
	constructor(canvas) {
		this.canvas = canvas;
		this.context = canvas.getContext("2d");
		this.width = canvas.width;
		this.height = canvas.height;
		this.map = new Map(this);
		this.player = new Player(this)
	}
	start() {
		this.animation()
	}
	animation() {
		this.map.drawLevel();
		this.map.update();
		this.player.drawPlayer
		this.animationId = window.requestAnimationFrame((timestamp) => {
			let last;
			let dt;
			if (!last) {
				last = timestamp;
			}
			dt = timestamp - last;
			last = timestamp;
		});
	}
}
