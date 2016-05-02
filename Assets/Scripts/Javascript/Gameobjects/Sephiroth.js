function Sephiroth(x,y,w,h) {
	this.name = "Sephiroth";
	this.enabled = true;
	this.started = false;
	this.rendered = true;
	
	this.Transform = {};
	this.Transform.position = new Vector(x,y);
	this.Transform.size = new Vector(w,h);
	this.Transform.scale = new Vector(1,1);
	this.Transform.pivot = new Vector(0.5,0.5);

	this.Physics = {};
	this.Physics.enabled = true;
	this.Physics.Clickable = false;
	this.Physics.dragAndDroppable = false;
	this.Physics.ColliderIsSameSizeAsTransform = true;
	this.Physics.countHovered = 0;
	this.Physics.Collider = {};
	this.Physics.Collider.position = new Vector();
	this.Physics.Collider.size = new Vector();

	this.Renderer = {
		isVisible: true,
		isSpriteSheet: true,
		that: this.Transform,
		Material: {
			Source: "",
			SizeFrame: new Vector(32,48),
			CurrentFrame: new Vector(0,0)
		},

		Animation:{
			animated: true,
			animations: [],
			current:[],
			currentIndex:0,
			totalAnimationLength: 0.5
		},
		AnimationCount: 0,
		
		Draw: function() {
			if (this.isSpriteSheet) 
			{
				if (this.Animation.animated) {	
					
					if (this.AnimationCount > this.Animation.totalAnimationLength/this.Animation.current.length) {
						this.Animation.currentIndex ++ ;
						this.AnimationCount = 0 ;
						if (this.Animation.currentIndex > this.Animation.current.length-1) {
							this.Animation.currentIndex = 0;
						}
					} 
					
					this.AnimationCount += Time.DeltaTime ;
					
				}else {
					this.AnimationCount = 0;
					this.Animation.currentIndex = 0;
				}
				this.Material.CurrentFrame = this.Animation.current[this.Animation.currentIndex];

				var scaledSizeX = this.that.size.x*this.that.scale.x;
				var scaledSizeY = this.that.size.y*this.that.scale.y;
				//console.log(this);
				ctx.drawImage(this.Material.Source,
								this.Material.CurrentFrame.x,
								this.Material.CurrentFrame.y,
								this.Material.SizeFrame.x,
								this.Material.SizeFrame.y,
								this.that.position.x-this.that.pivot.x*scaledSizeX,
								this.that.position.y-this.that.pivot.y*scaledSizeY,
								scaledSizeX,
								scaledSizeY);
			} 
			else 
			{
				var scaledSizeX = this.that.size.x*this.that.scale.x;
				var scaledSizeY = this.that.size.y*this.that.scale.y;
				ctx.drawImage(this.Material.Source,
								this.that.position.x-this.that.pivot.x*scaledSizeX,
								this.that.position.y-this.that.pivot.y*scaledSizeY,
								scaledSizeX,
								scaledSizeY);
			}
		}			

	};

	this.SetPosition = function(x,y) {
		this.Transform.position.x = x;
		this.Transform.position.y = y;

		if (!this.Physics.ColliderIsSameSizeAsTransform) {
			this.Physics.Collider.position.x = this.Transform.position.x;
			this.Physics.Collider.position.y = this.Transform.position.y;
		}
	};
	this.SetSize = function(x,y) {
		this.Transform.size.x = x;
		this.Transform.size.y = y;

		if (!this.Physics.ColliderIsSameSizeAsTransform) {
			this.Physics.Collider.size.x = this.Transform.size.x;
			this.Physics.Collider.size.y = this.Transform.size.y;
		}
	};
	this.SetScale = function(x,y) {
		this.Transform.scale.x = x;
		this.Transform.scale.y = y;
	};
	this.SetPivot = function(x,y) {
		this.Transform.pivot.x = x;
		this.Transform.pivot.y = y;
	};

	this.Awake = function() {
		console.log('%c System:GameObject ' + this.name + " Created !", 'background:#222; color:#b00b55');
	};
	this.Start = function() {
		if (!this.started) {
			// operation start
			this.started = true;
			if (this.Physics.ColliderIsSameSizeAsTransform) {
				this.Physics.Collider = this.Transform;
			}
			var img = Images["sephiroth"]
			this.Renderer.Material.Source = img;
			this.Renderer.Material.CurrentFrame = new Vector(0,0);
			for (var i = 0; i < img.height; i+=this.Renderer.Material.SizeFrame.y) {
				var array = [];
				for (var j = 0; j < img.width; j+=this.Renderer.Material.SizeFrame.x) {
					array.push(new Vector(j,i));
				}
				this.Renderer.Animation.animations.push(array);
			}
			this.Renderer.Animation.current = this.Renderer.Animation.animations[0];
			
			
			console.log('%c System:GameObject ' + this.name + " Started !", 'background:#222; color:#bada55');
		}
		this.Update();
	};
	this.Update = function() {
		if ( this.enabled ) {
			
			if (Input.KeysDown[37] || Input.KeysDown[38] || Input.KeysDown[39] || Input.KeysDown[40]) {
				this.Renderer.Animation.animated = true;
				if (Input.KeysDown[37]) {
					//this.Transform.scale.sub(new Vector(0.1,0.1));
					this.Renderer.Animation.current = this.Renderer.Animation.animations[1];
				}
				if (Input.KeysDown[38]) {
					//this.Transform.scale.sub(new Vector(0.1,0.1));
					this.Renderer.Animation.current = this.Renderer.Animation.animations[3];
				}
				if (Input.KeysDown[39]) {
					//this.Transform.scale.add(new Vector(0.1,0.1));
					this.Renderer.Animation.current = this.Renderer.Animation.animations[2];
				}
				if (Input.KeysDown[40]) {
					//this.Transform.scale.sub(new Vector(0.1,0.1));
					this.Renderer.Animation.current = this.Renderer.Animation.animations[0];
				}
			} else {
				this.Renderer.Animation.animated = false;
			}
			this.Renderer.Draw();
				

		}
		this.GUI();	
	};
	this.GUI = function() {
		if (Application.debugMode) {
			Debug.debugObject(this);
		}
		
	}
	this.onHover = function() {
		this.Physics.countHovered ++;
		
	}
	this.onClicked = function() {
		this.Physics.countHovered ++;
	}
	this.onUnHovered = function() {
		this.Physics.countHovered = 0;
	}

	this.Awake();

}