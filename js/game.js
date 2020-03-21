class Game {
	constructor(canvas) {
		this.canvas = canvas;
		this.context = canvas.getContext("2d");
		this.width = canvas.width;
		this.height = canvas.height;
		this.map = new Map(this);
	}
	start() {
		this.map.generateLevel();
		this.gameLoop()
	}
	gameLoop() {
		let last;
		let dt;
		function loop(timestamp) {
			requestAnimationFrame(loop);
			context.clearRect(0, 0, canvas.width, canvas.height);

			// calculate the time difference since the last update. requestAnimationFrame
			// passes the current timestamp as a parameter to the loop
			if (!last) {
				last = timestamp;
			}
			dt = timestamp - last;
			last = timestamp;

			// update and render everything in the grid
			for (let row = 0; row < numRows; row++) {
				for (let col = 0; col < numCols; col++) {
					switch (cells[row][col]) {
						case types.wall:
							context.drawImage(wallImg, col * grid, row * grid);
							break;
						case types.softWall:
							context.drawImage(softWallImg, col * grid, row * grid);
							break;
					}
				}
      }
      entities.forEach(entity => {
				entity.update(dt);
				entity.render();
			});

			// remove dead entities
			entities = entities.filter(entity => entity.alive);
		}
	}
}
