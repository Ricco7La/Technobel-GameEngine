var Time = {
	Time: 0,
	DeltaTime: 0,
	TimeScale: 1,
	FPS: 0,
	TimeOfLastFrame: 0,

	GameStart:0,
	GameLoaded:0,
	SceneStart:0,
	SceneLoaded:0,

	GetTimeWhenGameBegin : function() {
		return this.GameStart;
	},
	SetTimeWhenGameBegin : function() {
		this.GameStart = this.Time;
	},
	GetTimeWhenGameLoaded : function() {
		return this.GameLoaded;
	},
	SetTimeWhenGameLoaded : function() {
		this.GameLoaded = this.Time;
	},
	GetTimeWhenSceneBegin : function() {
		return this.SceneStart;
	},
	SetTimeWhenSceneBegin : function() {
		this.SceneStart = this.Time;
	},
	GetTimeWhenSceneLoaded : function() {
		return this.SceneLoaded;
	},
	SetTimeWhenSceneLoaded : function() {
		this.SceneLoaded = this.Time;
	},

	SetTimeValues: function() {
		this.Time = Date.now();
		this.DeltaTime = (this.Time - this.TimeOfLastFrame) / 1000;
		
		this.averageDelay += ((this.Time - this.TimeOfLastFrame) - this.averageDelay) / 10
		this.FPS = (1000 / this.averageDelay ).toFixed(1);

		this.TimeOfLastFrame = this.Time;
	}
}

