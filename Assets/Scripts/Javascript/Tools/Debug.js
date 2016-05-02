var Debug = {
	debugScene : function() {
		if (Application.debugMode) {
			this.showFPS();
			this.sceneName();
			this.mousePosition();
			this.showTime();
		}
	},
	showFPS : function() {
		//console.log(Time.FPS);
		if (Time.FPS > 40) {
			ctx.fillStyle = "#65C065";
		} else if (Time.FPS < 20) {
			ctx.fillStyle = "red";
		}else {
			ctx.fillStyle = "orange";
		}
		ctx.fillRect(15,15,20,20);
		ctx.fillStyle = "black";
	},
	sceneName : function() {
		ctx.font = '15px Arial';
		ctx.fillStyle = 'black';
		ctx.fillText(Application.LoadedScene.name, 45, 32);
	},
	mousePosition : function() {
		ctx.font = '10px Arial';
		if (Input.MouseClick) {
			ctx.fillStyle = '#65C065';
		}else {
			ctx.fillStyle = 'white';
		}
		ctx.fillText(Input.MousePosition.x+" "+Input.MousePosition.y, Input.MousePosition.x-10, Input.MousePosition.y-2);
	},
	showTime : function() {
		ctx.font = '10px Arial';
		ctx.fillStyle = 'white';
		var timeGame = Time.GetTimeSinceGameBegin()/1000 |0;
		var timeScene = Time.GetTimeSinceSceneBegin()/1000 |0;
		ctx.fillText("Game: " + timeGame.toString().toHHMMSS(), 10, 50);
		ctx.fillText("Scene: " + timeScene.toString().toHHMMSS(), 10, 60);
	},
	debugObject : function(go) {

		var scaledW =go.Transform.size.x * go.Transform.scale.x;
		var scaledH = go.Transform.size.y * go.Transform.scale.y;
		var posX = go.Transform.position.x - scaledW*go.Transform.pivot.x;
		var posY = go.Transform.position.y - scaledH*go.Transform.pivot.y;
		
		var colW = go.Physics.Collider.size.x * go.Transform.scale.x;
   		var colH = go.Physics.Collider.size.y * go.Transform.scale.y;
   		var colX = go.Physics.Collider.position.x - scaledW*go.Transform.pivot.x;
   		var colY = go.Physics.Collider.position.y - scaledH*go.Transform.pivot.y;
   		


		ctx.fillStyle= "rgba(80,250,80,0.3)";
		if (go.Physics.Collider) {

			ctx.fillRect(colX,colY,colW,colH);
			ctx.textBaseline = 'top';
			ctx.fillStyle= "darkgreen";
			ctx.fillText(colX+" "+colY+" "+colW+" "+colH, posX, posY+scaledH+20);
		}
		ctx.strokeStyle= "gray";
		if (go.Renderer.Material) {
			ctx.strokeRect(posX,posY,scaledW,scaledH);
		}

		ctx.font = '13px Arial';
		ctx.fillStyle = 'white';
		ctx.textBaseline = 'top';
		ctx.fillText(go.name, posX, posY+scaledH+3);

		ctx.font = '9px Arial';
		ctx.fillStyle = 'white';
		ctx.textBaseline = 'bottom';
		ctx.fillText(posX+" "+posY+" "+scaledW+" "+scaledH, posX, posY-2);

		ctx.fillStyle = 'red';
		ctx.beginPath();
		ctx.arc(go.Transform.position.x , go.Transform.position.y , 1, 0, Math.PI * 2);
		ctx.closePath();

		ctx.fill();

	}
	
}