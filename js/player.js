class Player {
	constructor(game) {
		this.context = game.context;
		this.map = new Map (this)
		this.row = 0;
		this.col = 0;
		this.width = 10;
		this.height = 10;
		this.numBomb = 2;
		this.speedX = 0;
		this.speedY = 0;
		this.playerImg = new Image();
		this.playerImg.src = "/images/Ship4.png";
	}
	drawPlayer() {
		this.context.drawImage(this.playerImg, this.row, this.col);
	}
	update() {
		this.row += this.speedX;
		this.col += this.speedY;
	}
	setControls() {
		window.addEventListener("keydown", event => {
			switch (event.keyCode) {
				case 38: // upkey
					this.speedY = - 2;
					break;
				case 40: // downkey
					this.speedY = 2;
					break;
				case 39: // right key
					this.speedX = 2;
					break;
				case 37: // left key
					this.speedX = - 2;
					break;
				// case 17: //space key
				// 	this.bomb.drawBomb ()
				// 	break
			}
		});
		window.addEventListener("keyup", event => {
			this.speedX = 0;
			this.speedY = 0;
		});
	}
	moveUp() {
		if (this.map.cells[row][col].types != bg ) {
			this.row = row
			console.log("collide");
		} else {
			this.row--;
		}
		// this.orientation = 'up'
	}
	moveDown() {
		this.row++;
		// this.orientation = 'down'
	}
	moveLeft() {
		this.col--;
		// this.orientation = 'left'
	}
	moveRight() {
		this.col++;
		// this.orientation = 'right'
	}
	// collision () {
	// 	if (!this.map.cells[row][col]) {
	// 		console.log("collide");
	// 	}
	// }
}
