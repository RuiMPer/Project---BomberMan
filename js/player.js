class Player {
	constructor(game) {
		this.context = game.context;
		this.row = 0;
		this.col = 0;
		this.width = 10;
		this.height = 30;
		this.bomb = 2;
		this.speedX = 0;
		this.speedY = 0;
		this.playerImg = new Image();
		this.playerImg.src = "/images/Ship4.png";
	}
	// Save all the images in the character
	// this.imgs = {}
	// Loop keys of object
	// for (var orientation in imgPaths) {
	//   this.imgs[orientation] = new Image()
	//   this.imgs[orientation].src = imgPaths[orientation]
	// }
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
					this.speedY = -1;
					break;
				case 40: // downkey
					this.speedY = 1;
					break;
				case 39: // right key
					this.speedX = 1;
					break;
				case 37: // left key
					this.speedX = -1;
					break;
			}
		});
		window.addEventListener("keyup", event => {
			this.speedX = 0;
			this.speedY = 0;
		});
	}
	moveUp() {
		this.row--;
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
}
