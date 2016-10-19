var Alien = function() {
	this.image = document.createElement("img");
	
	this.position = new Vector2();
	this.position.set(SCREEN_WIDTH/2, SCREEN_HEIGHT/2);
	
	this.width = 53;
	this.height = 28;
	this.length = 1;
	
	this.image.src = "Alien Ship.png";
		
	this.velocity = new Vector2();
	
	
	this.cooldownTimer = 0;
};

//Random Number Creation
function rand(floor, ceil) {
	return Math.floor((Math.random() * (ceil - floor)) + floor);
}

var spawnTimer = 5;

	var type = rand(0, 5);
	
	//alien Variables
	var ALIEN_SPEED = rand(1, 4);
	
Alien.prototype.update = function(deltaTime)
{
	// Alien spawning
	var x = rand(0 + Alien.width/2, SCREEN_WIDTH-Alien.width/2);
	var y = rand(-200, -100);

	var dirX = 0;
	var dirY = ALIEN_SPEED;

	var movX = 0;
	var movY = dirY;

	this.Alien.x = x + movX;
	this.Alien.y = y + movY;

	this.Alien.velocityX = -dirX * ALIEN_SPEED;
	this.Alien.velocityY = ALIEN_SPEED;
}

Alien.prototype.draw = function()
{
	// draw the alien
    for (var i = 0; i < Alien.length; i++) {
        Alien[i].x = Alien[i].x + Alien[i].velocityX;
        Alien[i].y = Alien[i].y + Alien[i].velocityY;
    }

    //Draw all aliens
    for (var i = 0; i < Alien.length; i++) {
        context.drawImage(Alien[i].image, Alien[i].x - Alien[i].width / 2,
            Alien[i].y - Alien[i].height / 2);
    }
    spawnTimer -= deltaTime;
    if (spawnTimer <= 0) {
        spawnTimer = 5;
        Alien.push(new Alien());
    }
}