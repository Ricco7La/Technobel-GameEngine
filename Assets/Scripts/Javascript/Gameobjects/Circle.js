function Circle(x,y,r) {
	this.name = "Circle";
	this.enabled = true;
	this.started = false;
	this.Physics = {};
	this.Physics.Clickable = false;
	this.Physics.countHovered = 0;
	this.Physics.Collider = null;
	this.x = x;
	this.y = y;
	this.r = r || 50;


	this.Awake = function() {
		console.clear();
		console.log('%c System:GameObject ' + this.name + " Created !", 'background:#222; color:#b00b55');
	};
	this.Start = function() {
		if (!this.started) {
			// operation start

			this.started = true;
			console.log('%c System:Scene ' + this.name + " Started !", 'background:#222; color:#bada55');
		}
		this.Update();
	};
	this.Update = function() {
		if ( this.enabled ) {
			ctx.fillStyle = "yellow";
			ctx.beginPath()
			ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fill();
		}
		this.GUI;	
	};
	this.GUI = function() {
		
	}
	this.onHover = function() {
		this.countHovered ++;
	}
	this.onClicked = function() {
		
	}
	this.onUnHovered = function() {
		this.countHovered = 0;
	}

	this.Awake();

}