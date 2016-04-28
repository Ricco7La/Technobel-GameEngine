function Rectangle(x,y,w,h) {
	this.name = "Rectangle";
	this.enabled = true;
	this.started = false;
	this.x = x;
	this.y = y;
	this.w = w || 100;
	this.h = h || 50;

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
			ctx.fillRect(this.x,this.y,this.w,this.h);

		}
		this.GUI;	
	};
	this.GUI = function() {
		
	}

	this.Awake();

}