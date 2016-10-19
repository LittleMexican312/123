var Player = function() {
	this.image = document.createElement("img");
	
	this.position = new Vector2();
	this.position.set(SCREEN_WIDTH/2, SCREEN_HEIGHT/2);
	
	this.width = 40;
	this.height = 89;
	
	this.image.src = "Player Images/Rocket1.png";
		
	this.velocity = new Vector2();
	
	this.rotation = 0;
	
	this.cooldownTimer = 0;
};

var positionX = 200;
var positionY = 200;

Player.prototype.update = function(deltaTime)
{
	var left = false;
	var right = false;
	var up = false;
	var down = false;
	var space = false;
	var falling;
	var PLAYER_SPEED = 2;
	var FALLING_SPEED = 2.7;
	var ROCKET_SPEED = 1.5;

//Check if Key is Down
	if((keyboard.isKeyDown(keyboard.KEY_LEFT) == true)  || (keyboard.isKeyDown(keyboard.KEY_A) == true))
	{
		left = true;
		player.positionX += 1;
	}
		
	if((keyboard.isKeyDown(keyboard.KEY_RIGHT) == true)  || (keyboard.isKeyDown(keyboard.KEY_D) == true)) 
	{
		right = true;
	}
	if ((keyboard.isKeyDown(keyboard.KEY_UP) == true) || (keyboard.isKeyDown(keyboard.KEY_W) == true)) {
		up = true;
		this.image.src = "Player Images/Rocket2.png";
		falling = false;
	} else {
		this.image.src = "Player Images/Rocket1.png";
		falling = true;
	}
	
	if((keyboard.isKeyDown(keyboard.KEY_DOWN) == true)  || (keyboard.isKeyDown(keyboard.KEY_S) == true))
	{
		down = true;
		this.image.src = "Player Images/Rocket1.png";
	}
	
	if(this.cooldownTimer > 0)
	{
	this.cooldownTimer -= deltaTime;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true && this.cooldownTimer <= 0)
	{
		space = true;
		bulletSound.play();
        this.cooldownTimer = 0.5;
        // Shoot a bullet
	}

	if (falling == true) {
		this.position.y += FALLING_SPEED;
	}
	
//Add Player Speed
	if (left == true) {
		this.position.x -= PLAYER_SPEED;
	}
	if (right == true) {
		this.position.x += PLAYER_SPEED;
	}
	if (up == true) {
		this.position.y -= PLAYER_SPEED * ROCKET_SPEED;
	}
	if (down == true && player.position.y <= SCREEN_HEIGHT - 21 ) {
		this.position.y += PLAYER_SPEED * ROCKET_SPEED;
	}
	if (space == true && shootTimer <= 0){
		shootTimer += 0.3;
		playerShoot();
	}
		
		// calculate the new position and velocity:
	this.position.y = Math.floor(this.position.y + (deltaTime * this.velocity.y));
	this.position.x = Math.floor(this.position.x + (deltaTime * this.velocity.x));
		
		
	//Player Position Updates
    if (player.position.x >= SCREEN_WIDTH - player.width/2) {

        player.position.x -= 2; 

    }

    if (player.position.x <= 0 + player.width/2) {

        player.position.x += 2;; 

    }  

    if (player.position.y >= SCREEN_HEIGHT - 21) {

        player.position.y -= 2.7;
		down = false; 

    }

    if (player.position.y <= 0 + player.height/2) {

        player.position.y += 3; 

    }
	
	//== BULLET STUFF ==//
	
	//Player Shooting Function
function playerShoot()
{
    var bullet = {
        image: document.createElement("img"),
        x: 0,
        y: 0,
        width: 5,
        height: 5,
        velocityX: 0,
        velocityY: 0
    };
    bullet.image.src = "Player Images/bullet.png";

    var velX = 0;
    var velY = -1;

    var s = Math.sin(player.rotation);
    var c = Math.cos(player.rotation);

    var xVel = (velX * c) - (velY * s);
    var yVel = (velX * s) + (velY * c);

    bullet.velocityX = xVel * BULLET_SPEED;
    bullet.velocityY = yVel * BULLET_SPEED;

    bullet.x = player.position.x;
    bullet.y = player.position.y;

	bullets.push(bullet);
}
	
    //Shoot Timer
    if(shootTimer > 0)
        shootTimer -= deltaTime;

    //Bullet Functionality
    for (var i = 0; i < bullets.length; i++) {
        bullets[i].x += bullets[i].velocityX;
        bullets[i].y += bullets[i].velocityY;
    }
    for (var i = 0; i < bullets.length; i++) {
        if (bullets[i].x < -bullets[i].width ||
            bullets[i].x > SCREEN_WIDTH ||
            bullets[i].y < -bullets[i].height ||
            bullets[i].y > SCREEN_HEIGHT) {
            bullets.splice(i, 1);
            break;
        }
    }

    //Draw Bullets
    for (var i = 0; i < bullets.length; i++) {
        context.drawImage(bullets[i].image,
            bullets[i].x - bullets[i].width / 2,
            bullets[i].y - bullets[i].height / 2);
    }
	
	if (bullets.x < 0 || bullets.x > SCREEN_WIDTH || bullets.y < 0 || bullets.y > SCREEN_HEIGHT) {
          bullet.isDead = true;
      }
}
	
Player.prototype.draw = function()
{
	context.save();
	context.translate(this.position.x, this.position.y);
	context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}
