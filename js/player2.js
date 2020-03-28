class Player2 {
	constructor(game) {
		this.context = game.context;
		this.game = game;

		this.map = this.game.map;
		this.bomb = this.game.bomb;

		this.row = 1;
		this.col = 1;

		this.width = this.game.map.tilewidth;
		this.height = this.game.map.tileheight;

		this.x = this.game.width - this.width; // setting the starting position in the top right corner
		this.y = this.height; // setting the starting position in the top right corner

		this.numBomb2 = 1;
		this.bomb2 = [];

		this.playerImg2 = new Image();
		this.playerImg2.src = "/images/Ship5.png";

		this.collision = false;
		this.dead = false;
	}
	drawPlayer() {
		this.context.drawImage(
			this.playerImg2,
			this.x,
			this.y,
			this.width,
			this.height
		);
	}
	setControls() {
		// let dx = 0;
		// let dy = 0;
		// let newMove = { dx: 0, dy: 0 };
		window.addEventListener("keydown", event => {
			// if (this.collision = true) {
			// 	this.row = this.row
			// 	this.col = this.col
			// } else {
			switch (event.keyCode) {
				case 38: // upkey
					this.row -= 1;
					this.y -= this.height;
					break;
				case 40: // downkey
					this.row += 1;
					this.y += this.height;
					break;
				case 39: // right key
					this.col += 1;
					this.x += this.width;
					break;
				case 37: // left key
					this.col -= 1;
					this.x -= this.width;
					break;
				case 96: //left ctrl
					if (this.numBomb2 > 0) {
						this.placeBomb();
					}
			}
			this.setOuterBoundries();
			console.log("Row: ", this.row, "Col: ", this.col);
			// }
		});
	}

	setOuterBoundries() {
		// left:
		if (this.x <= 0) {
			this.x += this.width;
			this.col += 1;
		}
		// right:
		if (this.x >= this.game.width - this.width) {
			this.x -= this.width;
			this.col -= 1;
		}
		// top:
		if (this.y <= 0) {
			this.y += this.height;
			this.row += 1;
		}
		// bottom:
		if (this.y >= this.game.height - this.height) {
			this.y -= this.height;
			this.row -= 1;
		}
	}
	placeBomb() {
		this.numBomb2 -= 1;
		// add a new bomb to array of bombs
		this.bomb2.push(new Bomb(this));
		setTimeout(() => {
			// remove the bomb after 3 seconds
			// add here what do you wwant to trigger when it explodes
			this.bomb2.shift();
		}, 3000);
	}
	checkCollision(map) {
		const currentCell = this.map.cells[this.row][this.col];
		const types = this.map.types;
		if (currentCell === types.wall) {
			// left:
			if (this.left() < map.left) {
				this.x = this.width;
				this.col += 1;
			}
			// 	// right:
			// 	if (this.x >= this.game.map.tilewidth - this.width) {
			// 		this.x -= this.width;
			// 		this.col = this.col;
			// 	}
			// 	// top:
			// 	if (this.height <= 0) {
			// 		this.row += 1;
			// 		this.y += this.height;
			// 	}
			// 	// bottom:
			// 	if (this.y >= this.game.map.tileheight - this.height) {
			// 		this.y -= this.height;
			// 		this.row -= 1;
			// 	}
			console.log("Wall");
		} else if (currentCell === types.softWall) {
			this.colision = true;
			console.log("Soft Wall");
		}
	}
}
