class Map {
	constructor(game) {
		this.context = game.context;
		this.tileSize = game.width / 10;
		this.height = game.height;
		this.width = game.width;
		this.grid = 64;
		this.numRows = 13;
		this.numCols = 15;
	}
	drawWall() {
		const softWallImg = new Image();
		softWallImg.src = "/images/wall1.png";
		const wallImg = new Image();
		wallImg.src = "/images/wall2.jpg";

		const types = {
			wall: "0",
			softWall: 1,
			bomb: 2
		};
		let entities = [];

		let cells = [];
		const template = [
			["0","0",	"0","0","0","0","0","0","0","0","0","0","0","0","0"],
			["0", "x", "x", , , , , , , , , , "x", "x", "0"],
			["0", "x", "0", , "0", , "0", , "0", , "0", , "0", "x", "0"],
			["0", "x", , , , , , , , , , , , "x", "0"],
			["0", , "0", , "0", , "0", , "0", , "0", , "0", , "0"],
			["0", , , , , , , , , , , , , , "0"],
			["0", , "0", , "0", , "0", , "0", , "0", , "0", , "0"],
			["0", , , , , , , , , , , , , , "0"],
			["0", , "0", , "0", , "0", , "0", , "0", , "0", , "0"],
			["0", "x", , , , , , , , , , , , "x", "0"],
			["0", "x", "0", , "0", , "0", , "0", , "0", , "0", "x", "0"],
			["0", "x", "x", , , , , , , , , , "x", "x", "0"],
			["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]
		];

		// populate the level with walls and soft walls
			cells = [];

			for (let row = 0; row < this.numRows; row++) {
				cells[row] = [];

				for (let col = 0; col < this.numCols; col++) {
					// 90% chance cells will contain a soft wall
					if (!template[row][col] && Math.random() < 0.9) {
						cells[row][col] = types.softWall;
					} else if (template[row][col] === types.wall) {
						cells[row][col] = types.wall;
					}
				}
			}
	}
	// draw() {
	// 	context.lineWidth = 3; // Change the border width of lines

	// 	// Draw the vertical lines
	// 	for (var x = 0; x <= this.height; x += this.tileSize) {
	// 		context.beginPath();
	// 		context.moveTo(x, 0);
	// 		context.lineTo(x, this.height);
	// 		context.stroke();
	// 	}

	// 	// Draw the horizontal lines
	// 	for (var y = 0; y <= this.width; y += this.tileSize) {
	// 		context.beginPath();
	// 		context.moveTo(0, y);
	// 		context.lineTo(this.width, y);
	// 		context.stroke();
	// 	}
	// }
}