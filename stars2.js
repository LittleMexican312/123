
//Random Number Creation
function rand(floor, ceil) {
	return Math.floor((Math.random() * (ceil - floor)) + floor);
}

//Setting of Asteroid Speed
var SECONDSTAR_SPEED = 5;

function spawnSecondStar() {

	//Create Asteroid
	var secondStar = {};
	secondStar.image = document.createElement("img");
	secondStar.width = 3;
	secondStar.height = 3;
	secondStar.length = 1;

	secondStar.image.src = "star2.png";

	var x = rand(0 + secondStar.width/2, SCREEN_WIDTH-secondStar.width/2);
	var y = rand(-200, -100);

	var dirX = 0;
	var dirY = SECONDSTAR_SPEED;

	var movX = 0;
	var movY = dirY;

	secondStar.x = x + movX;
	secondStar.y = y + movY;

	secondStar.velocityX = -dirX * SECONDSTAR_SPEED;
	secondStar.velocityY = SECONDSTAR_SPEED;

	secondStars.push(secondStar);
}