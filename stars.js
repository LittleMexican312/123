
//Random Number Creation
function rand(floor, ceil) {
	return Math.floor((Math.random() * (ceil - floor)) + floor);
}

//Setting of Asteroid Speed
var STAR_SPEED = 7.5;

function spawnStarOne() {
	
	//Create Asteroid
	var star = {};
	star.image = document.createElement("img");
	star.width = 4;
	star.height = 4;
	star.length = 1;

    star.image.src = "star1.png";

	var x = rand(0, SCREEN_WIDTH);
	var y = rand(-200, -100);

	var dirX = 0;
	var dirY = STAR_SPEED;

	var movX = 0;
	var movY = dirY;

	star.x = x + movX;
	star.y = y + movY;

	star.velocityX = -dirX * STAR_SPEED;
	star.velocityY = STAR_SPEED;

	stars.push(star);
}
