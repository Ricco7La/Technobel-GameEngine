function Loader() {
	this.name = "Loader";
	this.GameObjects =[];

	this.started = false;

	this.Awake = function() {
		console.clear();
		console.log('%c System:Scene ' + this.name + " Created !", 'background:#222; color:#bada55');
	}
	this.Start = function() {
		if (!this.started) {
			Time.SetTimeWhenGameBegin();
			// operation start
			LoadImages();

			Scenes["Scene1"] = new Scene1();
			Scenes["Scene2"] = new Scene2();
			Application.LoadedScene = Scenes["Scene1"];
			this.started = true;
			console.log('%c System:Scene ' + this.name + " Started !", 'background:#222; color:#bada55');
			Time.SetTimeWhenGameLoaded();
		}
		this.Update();
	}
	this.Update = function() {
		if (!Application.GamePaused) {
			for (var i = 0; i < this.GameObjects.length; i++) {
				//this.GameObjects[i].Start();
			}
		}
		this.GUI();
	}
	this.GUI = function() {
		if (!Application.GamePaused) {
			//Show UI
		} else {
			// Show pause menu
		}
	}

	this.Awake()
}