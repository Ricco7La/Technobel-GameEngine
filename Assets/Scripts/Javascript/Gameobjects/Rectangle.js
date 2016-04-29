function Rectangle(x,y,w,h) {
	this.name = "Rectangle";
	this.enabled = true;
	this.started = false;

	this.Transform = {};
	this.Transform.position = new Vector(x,y);
	this.Transform.size = new Vector(w,h);

	this.Physics = {};
	this.Physics.enabled = true;
	this.Physics.Clickable = false;
	this.Physics.dragAndDroppable = false;
	this.Physics.ColliderIsSameSizeAsTransform = false;
	this.Physics.countHovered = 0;
	this.Physics.Collider = {};
	this.Physics.Collider.position = new Vector(this.Transform.position.x,this.Transform.position.y);
	this.Physics.Collider.size = new Vector(this.Transform.size.x,this.Transform.size.y);

	this.mousePositionOffset = null;

	this.Awake = function() {
		console.clear();
		console.log('%c System:GameObject ' + this.name + " Created !", 'background:#222; color:#b00b55');
	};
	this.Start = function() {
		if (!this.started) {
			// operation start
			this.Physics.Clickable = true;
			this.started = true;
			this.Physics.ColliderIsSameSizeAsTransform = true;
			this.Physics.dragAndDroppable = true;
			console.log('%c System:Scene ' + this.name + " Started !", 'background:#222; color:#bada55');
		}
		this.Update();
	};
	this.Update = function() {
		if ( this.enabled ) {
			ctx.fillStyle = "yellow";
			ctx.fillRect(this.Transform.position.x,this.Transform.position.y,this.Transform.size.x,this.Transform.size.y);
			updateForDragAndDrop(this);
			
		}
		this.GUI;	
	};
	this.GUI = function() {
		
	}
	this.onHover = function() {
		this.Physics.countHovered ++;
		this.mousePositionOffset = new Vector();
		this.mousePositionOffset.x = this.Transform.position.x -Input.MousePosition.x;
		this.mousePositionOffset.y = this.Transform.position.y -Input.MousePosition.y;
		console.log('hover');
	}
	this.onClicked = function() {
		this.Physics.countHovered ++;
		if (this.Physics.dragAndDroppable) {
			Input.MouseDraging = true;
			Input.MouseDraggedElement = this;
			

		}
		console.log('click');
	}
	this.onUnHovered = function() {
		this.Physics.countHovered = 0;
		this.mousePositionOffset = null;
		console.log('unHovered');
	}

	this.Awake();

}