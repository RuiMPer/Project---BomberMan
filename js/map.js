class Map {
	constructor(game) {
		this.context = game.context;
		this.height = 10;
		this.width = 10;
		this.cells = [];
		this.grid = 60;
		this.numRows = 13;
		this.numCols = 10;
		this.softWallImg = new Image();
		this.softWallImg.src = "/images/wall2.jpg";
		this.wallImg = new Image();
		this.wallImg.src = "/images/wall1.png";
		this.entities = [];
		this.template = [
			[
				"▉",
				"▉",
				"▉",
				"▉",
				"▉",
				"▉",
				"▉",
				"▉",
				"▉",
				"▉"
			],
			["▉", "x", "x", , , , , ,"x", "▉"],
			["▉", "x", "▉", , , "▉", , "▉", "x", "▉"],
			["▉", "x", , , , , , , "x", "▉"],
			["▉", , "▉", ,  , "▉", , "▉", , "▉"],
			["▉", , , , , , , , , "▉"],
			["▉", , "▉", "▉", , "▉", , "▉", , "▉"],
			["▉", , , , , , , , , "▉"],
			["▉", , "▉", , , "▉", , "▉", , "▉"],
			["▉", "x", , , , , , , "x", "▉"],
			["▉", "x", "▉", "▉", , "▉", , "▉", "x", "▉"],
			["▉", "x", "x", , , , , "x", "x", "▉"],
			[
				"▉",
				"▉",
				"▉",
				"▉",
				"▉",
				"▉",
				"▉",
				"▉",
				"▉",
				"▉"
			]
		];
		this.types = {
			wall: "▉",
			softWall: 1,
			bomb: 2
		};
	}
	drawLevel() {
		// populate the level with walls and soft walls
		for (let row = 0; row < this.numRows; row++) {
			this.cells[row] = [];
			for (let col = 0; col < this.numCols; col++) {
				// 80% chance cells will contain a soft wall
				if (!this.template[row][col] && Math.random() < 0.8) {
					this.cells[row][col] = this.types.softWall;
				} else if (this.template[row][col] === this.types.wall) {
					this.cells[row][col] = this.types.wall;
				}
			}
		}
	}
	update() {
		// update and render everything in the grid
		for (let row = 0; row < this.numRows; row++) {
			for (let col = 0; col < this.numCols; col++) {
				switch (this.cells[row][col]) {
					case this.types.wall:
						context.drawImage(this.wallImg, col * this.grid, row * this.grid);
						break;
					case this.types.softWall:
						context.drawImage(this.softWallImg, col * this.grid, row * this.grid);
						break;
				}
			}
		}
	}
}