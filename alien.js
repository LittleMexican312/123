var Alien = function() {
	this.image = document.createElement("img");
	
	this.position = new Vector2();
	this.position.set(SCREEN_WIDTH/2, SCREEN_HEIGHT/2);
	
	this.width = 53;
	this.height = 28;
	this.length = 1;
	
	this.image.src = "Alien Ship.png";
		
	this.velocityX = 0;
	this.velocityY = 0;
	
	
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

	this.velocityX = x + movX;
	this.velocityY = y + movY;

	this.velocityX = -dirX * ALIEN_SPEED;
	this.velocityY = ALIEN_SPEED;
}

Alien.prototype.draw = function()
{
	
	// draw the alien
    for (var i = 0; i < Aliens.length; i++) {
        Aliens[i].position.x = Aliens[i].position.x + Aliens[i].velocityX;
        Aliens[i].position.y = Aliens[i].position.y + Aliens[i].velocityY;
    }

    //Draw all aliens
    for (var i = 0; i < Aliens.length; i++) {
        context.drawImage(Aliens[i].image, Aliens[i].position.x - Aliens[i].width / 2,
            Aliens[i].position.y - Aliens[i].height / 2);
    }
    spawnTimer -= deltaTime;
    if (spawnTimer <= 0) {
        spawnTimer = 5;
        Aliens.push(new Alien());
    }
	
}