class Player {
	constructor(game) {
		this.context = game.context;
		this.col = "x"
    this.row = "x"
    // this.orientation = 'down'
		// this.score = 0
		this.playerImg = new Image()
		this.playerImg.src = "/images/Ship4.png"
	}
    // Save all the images in the character 
    // this.imgs = {}
    // Loop keys of object
    // for (var orientation in imgPaths) {
    //   this.imgs[orientation] = new Image()
    //   this.imgs[orientation].src = imgPaths[orientation]
		// }
	drawPlayer () {
		this.context.drawImage(this.playerImg,0,0)
	}
  moveUp(){
    this.row--
    // this.orientation = 'up'
  }
  moveDown(){
    this.row++
    // this.orientation = 'down'
  }
  moveLeft(){
    this.col--
    // this.orientation = 'left'
  }
  moveRight(){
    this.col++
    // this.orientation = 'right'
  }
}