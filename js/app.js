// Enemies our player must avoid
var Enemy = function(row) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
	let speeds = [2,3,5];
	this.step = speeds[Math.floor(Math.random()*3)];
	this.x = 0;
	this.y = row*83;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.x+=this.step;
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
	this.default_x_move = 101;
	this.default_y_move = 83;
	this.x = 0;
	this.y = 0;
	this.sprite = "images/char-boy.png";
};

Player.prototype.update = function(){
	console.log("Player at x="+this.x+", y="+this.y);
};

Player.prototype.render = function(){
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPressed){
	switch(keyPressed){
		case 'left': 
			this.updateX(this.x-this.default_x_move);
			break;
		case 'right':
			this.updateX(this.x+this.default_x_move);
			break;
		case 'up':
			this.updateY(this.y-this.default_y_move);
			break;
		case 'down':
			this.updateY(this.y+this.default_y_move);
		
	}
};

Player.prototype.updateX = function(newX){
	if(newX >=0 && newX <= 404) this.x = newX;
}

Player.prototype.updateY = function(newY){
	if(newY >=0 && newY <= 415) this.y = newY;
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [  new Enemy(1),
					new Enemy(2),
					new Enemy(3)
					];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
