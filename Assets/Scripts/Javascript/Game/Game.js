function Run(argument) {
	Time.SetTimeValues();
	ctx.clearRect(0,0,canvas.width,canvas.height);

	console.log('working');
	if (Application.LoadedScene != null) {
		Application.LoadedScene.Start();
	}

	RequestAnimationFrame(Run);
}