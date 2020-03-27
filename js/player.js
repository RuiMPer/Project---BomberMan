class Player {
	constructor(game) {
		this.context = game.context;
		this.game = game;

		this.map = this.game.map;
		this.bomb = this.game.bomb;

		this.row = 1;
		this.col = 1;

		this.width = this.game.map.tilewidth;
		this.height = this.game.map.tileheight;

		this.x = this.width; // setting the starting position in the top left corner
		this.y = this.height; // setting the starting position in the top left corner
		this.numBomb1 = 2;
		this.bomb1 = [];

		this.playerImg1 = new Image();
		this.playerImg1.src = "/images/Ship4.png";

		this.collision = false;
		this.dead = false;
	}
	drawPlayer() {
		this.context.drawImage(
			this.playerImg1,
			this.x,
			this.y,
			this.width,
			this.height
		);
	}

	setControls() {
		let dx = 0;
		let dy = 0;
		let newMove = { dx: 0, dy: 0 };
		window.addEventListener("keydown", event => {
			// if (this.collision = true) {
			// 	this.row = this.row
			// 	this.col = this.col
			// } else {
			if (event.keyCode === 87) {
				this.row -= 1;
				this.y -= this.height;
			}
			if (event.keyCode === 83) {
				this.row += 1;
				this.y += this.height;
			}
			if (event.keyCode === 68){
				this.col += 1;
				this.x += this.width;
			}
			if (event.keyCode === 65) {
				this.col -= 1;
				this.x -= this.width;
			}
			// switch (event.keyCode) {
			// 	case 87: // upkey
			// 		if ((this.colision = false)) {
			// 			this.row -= 1;
			// 			this.y -= this.height;
			// 		} else {
			// 			return this.row, this.y
			// 		}
			// 		break;
			// 	case 83: // downkey
			// 		this.row += 1;
			// 		this.y += this.height;
			// 		break;
			// 	case 68: // right key
			// 		this.col += 1;
			// 		this.x += this.width;
			// 		break;
			// 	case 65: // left key
			// 		this.col -= 1;
			// 		this.x -= this.width;
			// 		break;
			// 	case 17: //left ctrl
			// 		if (this.numBomb1 > 0) {
			// 			this.setBomb;
			// 		}
			// }
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
	checkCollision() {
		const currentCell = this.map.cells[this.row][this.col];
		const types = this.map.types;
		if (currentCell === types.wall) {
			this.collision = true;
			console.log("Wall");
		} else if (currentCell === types.softWall) {
			this.colision = true;
			console.log("Soft Wall");
		}
	}
}
