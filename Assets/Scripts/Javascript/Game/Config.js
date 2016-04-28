var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var Scenes = {};
var gravity = new Vector();
gravity.y = -9.81;

var Application = {
	LoadedScene: null,
	GamePaused: false
};

var WalkableTiles = [];

var ImagesPath = [
	// { name:"monImage",path: "background/image.png"},
];
var Images = {};