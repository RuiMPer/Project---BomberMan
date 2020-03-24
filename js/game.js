class Game {
	constructor(canvas) {
		this.canvas = canvas;
		this.context = canvas.getContext("2d");
		this.width = canvas.width;
		this.height = canvas.height;
		this.map = new Map(this);
		this.player = new Player(this);
		this.player.setControls();
		this.animationId;
		this.frame = 0;
		this.gameON = true;
	}
	draw(timestamp) {
		this.map.drawLevel();
		this.map.update();
		this.player.drawPlayer();
		this.update(timestamp)
		const animation = window.requestAnimationFrame(timestamp => this.draw(timestamp))
	}
	update() {
		this.frame++;
		this.player.update();
	}
	animation() {
		this.draw();
		this.update();
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
	start() {
		this.animation();
	}
}
