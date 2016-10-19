var background = function() {
	this.image = document.createElement("img");
	
	this.position = new Vector2();
	this.position.set(SCREEN_WIDTH/2, SCREEN_HEIGHT/2);
	
	this.width = 480;
	this.height = 640;
	
	this.offset = new Vector2();
	this.offset.set(-159,-163);
	
	this.image.src = "Background.png";
		
	this.velocity = new Vector2();
	
};

background.prototype.draw = function()
{
	context.save();
	context.translate(this.position.x, this.position.y);
	context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}