class Player {
	constructor(game) {
		this.context = game.context;
		this.col = 1;
		this.row = 1;
		this.height = 10;
		this.width = 10;
		// this.orientation = 'down'
		// this.score = 0
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
		this.context.drawImage(this.playerImg, 0, 0);
	}
	updateEverything(keyCode) {
		switch (keyCode) {
			case 37:
				player.moveLeft();
				break;
			case 38:
				player.moveUp();
				break;
			case 39:
				player.moveRight();
				break;
			case 40:
				player.moveDown();
				break;
		}
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
